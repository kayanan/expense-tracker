import { Request, Response, NextFunction } from "express";
// import {InterfaceUser} from "../types/user"
import userModel from "./model/userSchema";
import bcrypt from "bcrypt";
import { Status, user } from "../types/user";

//retrieveUsers from data base

export const retrieveUsers = async (req: Request, res: Response) => {
  try {
    const result = await userModel.find();
    res.status(200).json({
      result: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// addUser in to data base

export const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const tempUser: user = { ...req.body };
    tempUser.password = hashedPassword;
    tempUser.status = Status.ACTIVE;
    const user = new userModel(tempUser);
    const result = await user.save();
    res.status(201).json({ created: result });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

// updateUser from data base

export const updateUser = async (req: Request, res: Response) => {
  try {
    const result = await userModel.findOneAndUpdate(
      { userName: req.body.userName },
      { ...req.body }
    );
    res.status(201).json({
      sucess: result,
    });
  } catch (error) {
    res.status(500).json({
      "update fail": error,
    });
  }
};
// deleteUser from data base
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const result = await userModel.deleteOne({ _id: req.body._id });
    res.status(201).json({ "deleted sucessfully": result });
  } catch (error) {
    res.status(500).json({
      "deletion Failed": error,
    });
  }
};
