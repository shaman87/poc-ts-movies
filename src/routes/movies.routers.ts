import express from "express";
import { createMovie, readMoviesList } from "../controllers/movies.controllers.js";

const router = express.Router();

router.get("/movies", readMoviesList);
router.post("/movies/create", createMovie);

export default router;