import express from "express";
import {getInstaller, uploadFile} from "../Controllers/Controller";

export const Router = express.Router();

Router.get("/installer", getInstaller);
Router.post("/", uploadFile);
