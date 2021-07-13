import express from "express";
import {uploadFile, listOfFiles, getTextFile, getFolderContent} from "../Controllers/Controller";

export const Router = express.Router();

Router.post("/", uploadFile);
Router.get("/", listOfFiles);
Router.get("/folder/:folder/file/:filename", getTextFile);
Router.get("/folder/:folder", getFolderContent)
