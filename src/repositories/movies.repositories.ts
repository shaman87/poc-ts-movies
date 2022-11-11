import { QueryResult } from "pg";
import { connection } from "../database/database.js";
import { Movie, MovieEntity, NewMovie } from "../protocols/Movie.js";


async function getMoviesList(): Promise<QueryResult<MovieEntity>> {
    return connection.query(`SELECT * FROM movies;`);
}

async function insertMovie({ name, platform, genre }: Movie): Promise<QueryResult<NewMovie>> {
    return connection.query(`
        INSERT INTO movies (name, platform, genre) VALUES ($1, $2, $3);
        `, [name, platform, genre]
    );
}

export { getMoviesList, insertMovie };