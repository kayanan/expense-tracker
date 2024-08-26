import { Request, Response } from "express";
import userModel from "./model/userSchema";
import bcrypt from "bcrypt";
import { createToken } from "./middleware/authorization";

export const login = async (req: Request, res: Response) => {
  const Result = await userModel.find({ userName: req.body.userName });
  const match=  await bcrypt.compare(
    req.body.password,
    Result[0].password.toString()!
    
  )
  console.log(Result[0]);
  if (Result[0].userName == req.body.userName && match ) {
    const token = await createToken(Result[0]);
    if (token) {
      
      res.status(200).json({
        token: token,
      });
    
      

    } else {
      res.status(500).json({
        error: "internal error",
      });
    }
  } else {
    res.status(200).json({
      error: "login failed",
    });
  }
};
