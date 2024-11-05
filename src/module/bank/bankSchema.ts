import mongoose from "mongoose";

const Schema =mongoose.Schema;

const branchSchema= new Schema({
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

    }}
    

})


const bankSchema =new Schema({
    _id:mongoose.SchemaTypes.ObjectId,
    baranchDetail:[branchSchema],
    
})

const model=mongoose.model("Bank",bankSchema)
 export default model;