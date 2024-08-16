import express, { Application } from "express";
import { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import env from "dotenv";
import router from "./routes";

env.config();


export const appRouting = (app: Application): void => {
  app.use(morgan("dev"));
  app.use(express.json({}));
  app.use(router);
  app.use((req: Request, res: Response, next: NextFunction) => {
    const error: any = new Error("page not found");
    error.status = 404;
    next(error);
  });
  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500).json({
      "ERROR MESSAGE": error.message,
    });
  });
};
