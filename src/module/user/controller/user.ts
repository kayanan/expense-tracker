import { Request, Response } from "express";
import userModel from "../userSchema";
import bcrypt from "bcrypt";
import { Status, user } from "../types/user";

// Retrieve all users from the database
export const retrieveUsers = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
};

// Add a new user to the database
export const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser: user = { ...req.body, password: hashedPassword, status: Status.ACTIVE };
    const createdUser = await new userModel(newUser).save();
    res.status(201).json({ created: createdUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to add user" });
  }
};

// Update a user in the database
export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await userModel.findOneAndUpdate(
      { userName: req.body.userName },
      { ...req.body },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ success: updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

// Delete a user from the database
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.body._id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ success: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};
