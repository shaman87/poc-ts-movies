import express from "express";
import { readMoviesList } from "../controllers/movies.controllers.js";

const router = express.Router();

router.get("/movies", readMoviesList);

export default router;