import { Request, Response } from "express";
import { Movie } from "../protocols/Movie.js";
import { deleteMovieById, getMovieById, getMoviesCountByPlatform, getMoviesList, insertMovie, updateMovieById } from "../repositories/movies.repositories.js"
import { movieSchema } from "../schemas/movies.schemas.js";
import { createdResponse, noContentResponse, notFoundResponse, okResponse, serverErrorResponse, unprocessableEntityResponse } from "./helper.controllers.js";

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

async function readMoviesCountByPlatform(req: Request, res: Response) {
    try {
        const moviesByPlatform = (await getMoviesCountByPlatform()).rows;

        return res.send(moviesByPlatform);

    } catch(error) {
        return serverErrorResponse(res, error);
    }
}

async function readMovie(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const movie = (await getMovieById(Number(id))).rows[0];

        if(!movie) return notFoundResponse(res);

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
        return unprocessableEntityResponse(res, errorList);
    }

    try {
        await insertMovie({ name, platform, genre });

        return createdResponse(res);

    } catch(error) {
        return serverErrorResponse(res, error);
    }
}

async function updateMovie(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const movie = (await getMovieById(Number(id))).rows[0];

        if(!movie) return notFoundResponse(res);

        await updateMovieById(movie.id, !movie.watched);

        return okResponse(res);

    } catch(error) {
        return serverErrorResponse(res, error);
    }
}

async function deleteMovie(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const movie = (await getMovieById(Number(id))).rows[0];

        if(!movie) return notFoundResponse(res);

        await deleteMovieById(Number(id));

        return noContentResponse(res);

    } catch(error) {
        return serverErrorResponse(res, error);
    }
}

export { readMoviesList, readMoviesCountByPlatform, readMovie, createMovie, updateMovie, deleteMovie };