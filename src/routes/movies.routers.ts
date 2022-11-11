import express from "express";
import { createMovie, readMovie, readMoviesList } from "../controllers/movies.controllers.js";

const router = express.Router();

router.get("/movies", readMoviesList);
router.get("/movie/:id", readMovie);
router.post("/movies/create", createMovie);

export default router;