import express from "express";
import { createMovie, deleteMovie, readMovie, readMoviesList, updateMovie } from "../controllers/movies.controllers.js";

const router = express.Router();

router.get("/movies", readMoviesList);
router.get("/movie/:id", readMovie);
router.post("/movies/create", createMovie);
router.put("/movie/:id", updateMovie);
router.delete("/movie/:id", deleteMovie);

export default router;