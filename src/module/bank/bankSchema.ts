import mongoose from "mongoose";
import {InterfaceBank} from "./types/bankTypes"
const Schema =mongoose.Schema;

const bankSchema =new Schema<InterfaceBank>({
    _id:mongoose.Schema.Types.ObjectId,
    bankName:{type:String,required:true},
    baranchId:{type:[mongoose.Schema.Types.ObjectId],ref:"BankBranch"},
    
})

const bankModel=mongoose.model<InterfaceBank>("Bank",bankSchema)
 export default bankModel;