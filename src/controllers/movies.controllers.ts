import { Request, Response } from "express";
import { getMoviesList } from "../repositories/movies.repositories.js"
import { serverErrorResponse } from "./helper.controllers.js";

async function readMoviesList(req: Request, res: Response) {
    try {
        const moviesList = (await getMoviesList()).rows;

        moviesList.forEach(movie => {
            movie.createdAt = movie.createdAt.toISOString().substring(0, 10);
        });

        return res.send(moviesList);

    } catch(error) {
        return serverErrorResponse(res, error);
    }
}

export { readMoviesList };