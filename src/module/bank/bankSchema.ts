import mongoose from "mongoose";
import {InterfaceBank,Status,InterfaceBankBranch} from "./types/bankTypes"
const Schema =mongoose.Schema;
const branchSchema= new Schema<InterfaceBankBranch>({
    _id: mongoose.Schema.Types.ObjectId,
    branchName:{type:String,required:true},
    branchCode:{type:Number,required:true},
    contactNumber:{type:[String],required:true,validate:{
        validator:(values:[string])=>{
            for(const value of values){
                if( !(/^(?:\+94|0)(7[0-9]{8}|11[0-9]{7}|2[0-9]{8})$/.test(value))){
                    return false;
                }
            }
            return true;
            
        },
        message:(prop:any)=>{
           return `${prop.value} is invalide`

        }

    }},
    createdAt: { type: Date, default: Date.now },
    status: {
    type: String,
    enum: [Status.ACTIVE, Status.DEACTIVE],
    default: Status.ACTIVE,
  }
    

})

const bankSchema =new Schema<InterfaceBank>({
    _id:mongoose.Schema.Types.ObjectId,
    bankName:{type:String,required:true},
    baranchIds:{type:[branchSchema]},
    createdAt: { type: Date, default: Date.now },
    status: {
    type: String,
    enum: [Status.ACTIVE, Status.DEACTIVE],
    default: Status.ACTIVE,
  }
    
})

const bankModel=mongoose.model<InterfaceBank>("Bank",bankSchema)
 export default bankModel;