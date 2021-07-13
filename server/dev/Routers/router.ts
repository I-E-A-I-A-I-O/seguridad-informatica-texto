import express from "express";
import {uploadFile, listOfFiles, getTextFile} from "../Controllers/Controller";

export const Router = express.Router();

Router.post("/", uploadFile);
Router.get("/", listOfFiles);
Router.get("/:filename", getTextFile);
