import express from "express";
import {getInstaller, uploadFile, listOfFiles, getTextFile} from "../Controllers/Controller";

export const Router = express.Router();

Router.get("/installer", getInstaller);
Router.post("/", uploadFile);
Router.get("/", listOfFiles);
Router.get("/:filename", getTextFile);
