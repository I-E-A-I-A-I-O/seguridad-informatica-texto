import {Request, Response, NextFunction} from "express";
import fse from "fs-extra";

export const getInstaller = async (req: Request, res: Response, next: NextFunction) => {
    const path = "Resources/installer.exe";
    res.download(path);
};

export const uploadFile = async (req: Request, res: Response, next: NextFunction) => {
    const files = req.files as Express.Multer.File[];
    if (!files) {
        return res.sendStatus(400);
    }
    for (let i = 0; i < files.length; i++) {
        await fse.copy(files[i].path, `textFiles/${files[i].originalname}`);
    }
    res.sendStatus(200);
};
