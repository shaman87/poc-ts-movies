import express from "express";
import dotenv from "dotenv";
import moviesRouter from "./routes/movies.routers.js";

dotenv.config();

const server = express();

server.use(express.json());

server.use(moviesRouter);

server.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});