import { Request, Response } from "express";
import userModel from "../model/userSchema";
import bcrypt from "bcrypt";
import { createToken } from "./authorization";

export const login = async (req: Request, res: Response) => {
  try {
    const user = await userModel.findOne({ userName: req.body.userName });
    if (!user) {
      return res.status(401).json({ error: "Login failed" });
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Login failed" });
    }

    const token = await createToken(user);
    if (!token) {
      return res.status(500).json({ error: "Internal server error" });
    }

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
