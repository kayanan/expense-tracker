import mongoose from "mongoose";

export interface InterfaceBank{
    _id: mongoose.Schema.Types.ObjectId;
    bankName:String;
    baranchId:[mongoose.Schema.Types.ObjectId]
  }


  export interface InterfaceBankBranch{
    _id: mongoose.Schema.Types.ObjectId;
    branchName:String,
    branchCode:Number,
    contactNumber:String
  }

  export type Bank = {
    _id?: mongoose.Schema.Types.ObjectId;
    bankName:String;
    baranchId?:[mongoose.Schema.Types.ObjectId]



  }