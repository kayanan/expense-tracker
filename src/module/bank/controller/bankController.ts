import { Request,Response,NextFunction } from "express";
import bankModel from "../bankSchema";
import mongoose from "mongoose";
import {Bank} from "../types/bankTypes"


//Get all bank details from DB

export const getAllBank=async(req:Request,res:Response)=>{
    const banks=await bankModel.find();

    res.status(200).json({
        banks
    })

}

// Add bank to DB
export const addBank=async(req:Request,res:Response)=>{
    const bank =new bankModel({
        _id:new mongoose.Types.ObjectId(),
    bankName:req.body.bankName,
    baranchId:[req.body.baranchId]
    })
try{
     const result= await bank.save();
     res.status(201).json({
        "message":"Created Sucessfuly"
     })
}
catch(error){
    res.status(500).json({
        "message":"Failed... Plese try again later"
     })
    }
   

}


// Delete a bank from the database
export const deleteBank= async (req: Request, res: Response) => {
    try {
      const deletedBank = await bankModel.findByIdAndDelete(req.params.id);
      if (!deletedBank) {
        return res.status(404).json({ error: "Bank not found" });
      }
      res.status(200).json({ success: "Bank deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete Bank" });
    }
  };


// Update a bank in the database
export const updateBank = async (req: Request, res: Response) => {
    
    try {
      const updatedUser = await bankModel.findOneAndUpdate(
        { bankName: req.body.bankName },
        {  },
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