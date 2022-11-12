import { QueryResult } from "pg";
import { connection } from "../database/database.js";
import { Movie, MovieEntity, NewMovie } from "../protocols/Movie.js";


async function getMoviesList(): Promise<QueryResult<MovieEntity>> {
    return connection.query(`SELECT * FROM movies;`);
}

async function getMoviesCountByPlatform(): Promise<QueryResult<MovieEntity>> {
    return connection.query(`
        SELECT platform, COUNT(platform) FROM movies GROUP BY platform ORDER BY count DESC;
    `);
}

async function getMovieById(id: number): Promise<QueryResult<MovieEntity>> {
    return connection.query(`SELECT * FROM movies WHERE id = $1;`, [id]);
}

async function insertMovie({ name, platform, genre }: Movie): Promise<QueryResult<NewMovie>> {
    return connection.query(`
        INSERT INTO movies (name, platform, genre) VALUES ($1, $2, $3);
        `, [name, platform, genre]
    );
}

async function updateMovieById(id: number, watched: boolean): Promise<QueryResult<MovieEntity>> {
    return connection.query(`UPDATE movies SET watched = $1 WHERE id = $2;`, [watched, id]);
}

async function deleteMovieById(id: number): Promise<QueryResult<MovieEntity>> {
    return connection.query(`DELETE FROM movies WHERE id = $1;`, [id]);
}

export { getMoviesList, getMoviesCountByPlatform, getMovieById, insertMovie, updateMovieById, deleteMovieById };