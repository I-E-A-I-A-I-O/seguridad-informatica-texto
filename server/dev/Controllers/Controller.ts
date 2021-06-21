import {Request, Response, NextFunction} from "express";
import fse from "fs-extra";

export const getInstaller = async (req: Request, res: Response, next: NextFunction) => {
    const path = "Resources/installer.exe";
    res.download(path);
};

export const uploadFile = async (req: Request, res: Response, next: NextFunction) => {
    const files = req.files as Express.Multer.File[];
    if (!files) {
	console.error("Received request with no file input");
        return res.sendStatus(400);
    }
    try {
	console.info("Processing received files");
        for (let i = 0; i < files.length; i++) {
	    console.info(`Copying file ${files[i].originalname}.`);
            await fse.copy(files[i].path, `textFiles/${files[i].originalname}`);
	    console.info(`file ${files[i].originalname} copied.`);
        }
        res.sendStatus(200);
    } catch (err) {
	console.error(err);
	res.sendStatus(500);
    }
};
