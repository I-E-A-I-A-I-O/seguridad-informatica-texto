import dotenv from "dotenv";
dotenv.config();
import express from "express";
import multer from "multer";
import cors from "cors";
import helmet from "helmet"
import {Router} from "./Routers/router"

const server = express();
const port = process.env.PORT || 8000;
const formHandler = multer();

server.use(express.static("public"));
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(formHandler.any());

server.use(Router);

server.listen(port, () => {
    console.info(`Server running in port ${port}!`);
});
