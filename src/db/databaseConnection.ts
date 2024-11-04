import mongoose from "mongoose";

const connectDb=async()=>{
    try{
         await mongoose.connect(process.env.DB_URL!);
        console.log("Database Connected sucessfuly !!!")
    }
        
    catch(error){
        console.log("Database Connection Failed !!!!!!!! :" + error)
    }

    
}

export default connectDb;
    
