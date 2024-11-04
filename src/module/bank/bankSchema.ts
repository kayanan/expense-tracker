import mongoose from "mongoose";

const Schema =mongoose.Schema;

const branchSchema= new Schema({
    branchName:{type:String,required:true},
    branchCode:{type:Number,required:true},
    contactNumber:{type:[String],required:true}

})


const bankSchema =new Schema({
    _id:mongoose.SchemaTypes.ObjectId,
    baranchDetail:[branchSchema],
    
})

const model=mongoose.model("Bank",bankSchema)
 export default model;