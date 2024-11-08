import { Request,Response,NextFunction } from "express";
import bankModel from "../bankSchema";
import mongoose from "mongoose";

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
        ...req.body
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
        if(req.body.createdAt ||req.body._id){
            return res.status(403).json({"message":"Forbidden"})
        }

    
    try {
      const updatedBank = await bankModel.findByIdAndUpdate(
        req.params.id,
        { ...req.body},
        { new: true }
      );
      if (!updatedBank) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({ success: updatedBank });
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  };



  // Branches Operations


  //Add branch
export const addBranch=async(req:Request,res:Response)=>{
    
try{
    const branch = await bankModel.findByIdAndUpdate(
        req.params.id,
        { $push: { baranchIds: {_id:new mongoose.Types.ObjectId(),...req.body} }},
        { new: true }
      );
     res.status(201).json({
        "message":"Created Sucessfuly "
     })
}
catch(error){
    res.status(500).json({
        "message":"Failed... Plese try again later"
     })
    }
   

}


// Delete branch

export const deleteBranch=async(req:Request,res:Response)=>{
    
    try{
        const branch = await bankModel.findByIdAndUpdate(
            req.params.id,
            { $pull: { baranchIds: req.params.branchId }},
            { new: true }
          );
         res.status(201).json({
            "message":"Deleted Sucessfuly "
         })
    }
    catch(error){
        res.status(500).json({
            "message":"Failed... Plese try again later"
         })
        }
       
    
    }