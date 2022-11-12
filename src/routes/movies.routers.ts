import express from "express";
import { createMovie, deleteMovie, readMovie, readMoviesCountByPlatform, readMoviesList, updateMovie } from "../controllers/movies.controllers.js";

const router = express.Router();

router.get("/movies", readMoviesList);
router.get("/movies/platforms", readMoviesCountByPlatform);
router.get("/movies/:id", readMovie);
router.post("/movies/create", createMovie);
router.put("/movies/:id", updateMovie);
router.delete("/movies/:id", deleteMovie);

export default router;