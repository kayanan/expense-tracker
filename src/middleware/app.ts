import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import router from "../module/user/userRoutes";
import connectDb from "../db/databaseConnection"
import routes from "../index";

export const appRouting = (app: Application): void => {
  app.use(morgan("dev"));
  app.use(express.json());
  connectDb();
  routes(app);

  

  app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error("Page not found");
    (error as any).status = 404;
    next(error);
  });

  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500).json({
      errorMessage: error.message,
    });
  });
};
