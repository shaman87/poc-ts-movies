import { QueryResult } from "pg";
import { connection } from "../database/database.js";

async function getMoviesList(): Promise<QueryResult<any>> {
    return connection.query(`SELECT * FROM movies;`);
}

export { getMoviesList };