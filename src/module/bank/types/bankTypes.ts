import mongoose from "mongoose";

export interface InterfaceBank{
    _id: mongoose.Schema.Types.ObjectId;
    bankName:String;
    baranchIds:[mongoose.Schema.Types.ObjectId];
    status?: Status;
    createdAt?: Date;
  }

  export const enum Status {
    ACTIVE = "active",
    DEACTIVE = "deactive",
  }

  export interface InterfaceBankBranch{
    _id: mongoose.Schema.Types.ObjectId;
    branchName:String,
    branchCode:Number,
    contactNumber:String,
    status?: Status;
    createdAt?: Date;
  }

  export type Bank = {
    _id?: mongoose.Schema.Types.ObjectId;
    bankName:String;
    baranchId?:[mongoose.Schema.Types.ObjectId]



  }