import { Request, Response, NextFunction } from "express";
import fse from "fs-extra";

export const uploadFile = async (req: Request, res: Response, next: NextFunction) => {
  const files = req.files as Express.Multer.File[];
  console.log(`The body is ${JSON.stringify(req.body)}`)
  if (!files) {
    console.error("Received request with no file input");
    return res.sendStatus(400);
  }
  if (!fse.existsSync("textFiles")) {
    await fse.ensureDir("textFiles");
  }
  try {
    console.info("Processing received files");
    for (let i = 0; i < files.length; i++) {
      console.info(`Copying file ${files[i].originalname}.`);
      await fse.writeFile(`textFiles/${files[i].originalname}`, files[i].buffer);
      console.info(`file ${files[i].originalname} copied.`);
    }
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export const listOfFiles = async (req: Request, res: Response, next: NextFunction) => {
    const files = await fse.readdir("textFiles");
    res.status(200).send(files);
};

export const getTextFile = async (req: Request, res: Response, next: NextFunction) => {
    const {filename} = req.params;
    const path = `textFiles/${filename}`
    fse.stat(path, (err, stat) => {
        if (err === null) {
            res.download(path);
        }
        else if (err.code === "ENOENT") {
            res.sendStatus(404);
        }
        else {
            res.sendStatus(500);
        }
    })
};
