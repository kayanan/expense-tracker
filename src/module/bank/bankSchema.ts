import mongoose from "mongoose";
import {InterfaceBank,Status} from "./types/bankTypes"
const Schema =mongoose.Schema;

const bankSchema =new Schema<InterfaceBank>({
    _id:mongoose.Schema.Types.ObjectId,
    bankName:{type:String,required:true},
    baranchIds:{type:[mongoose.Schema.Types.ObjectId],ref:"BankBranch"},
    createdAt: { type: Date, default: Date.now },
    status: {
    type: String,
    enum: [Status.ACTIVE, Status.DEACTIVE],
    default: Status.ACTIVE,
  }
    
})

const bankModel=mongoose.model<InterfaceBank>("Bank",bankSchema)
 export default bankModel;