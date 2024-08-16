import { NextFunction, Request, Response } from "express";
import { Role } from "../types/user";

export const adminAccess = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.role != Role.USER) {
    next();
  } else {
    res.status(500).json({
      message: "Access Denied",
    });
  }
};
