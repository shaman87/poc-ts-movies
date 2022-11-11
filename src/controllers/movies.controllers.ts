import { Request, Response } from "express";
import { Movie } from "../protocols/Movie.js";
import { getMovieById, getMoviesList, insertMovie } from "../repositories/movies.repositories.js"
import { movieSchema } from "../schemas/movies.schemas.js";
import { createdResponse, serverErrorResponse, unprocessableEntityResponse } from "./helper.controllers.js";

async function readMoviesList(req: Request, res: Response) {
    try {
        const moviesList = (await getMoviesList()).rows;

        moviesList.forEach(movie => {
            movie.createdAt = movie.createdAt.toLocaleString().substring(0, 10);
        });

        return res.send(moviesList);

    } catch(error) {
        return serverErrorResponse(res, error);
    }
}

async function readMovie(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const movie = (await getMovieById(Number(id))).rows[0];

        movie.createdAt = movie.createdAt.toLocaleString().substring(0, 10);

        return res.send(movie);

    } catch(error) {
        return serverErrorResponse(res, error);
    }
}

async function createMovie(req: Request, res: Response) {
    const { name, platform, genre } = req.body as Movie;
    const validation = movieSchema.validate({ name, platform, genre }, { abortEarly: false });

    if(validation.error) {
        const errorList = validation.error.details.map(error => error.message);
        return unprocessableEntityResponse(res).send(errorList);
    }

    try {
        await insertMovie({ name, platform, genre });

        return createdResponse(res);

    } catch(error) {
        return serverErrorResponse(res, error);
    }
}

export { readMoviesList, readMovie, createMovie };