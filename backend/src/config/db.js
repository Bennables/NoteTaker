import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.CONNECTION);
        console.log("SUCCESSFULLY CONNECTED MONGODB")
    } catch (error) {
        console.error("MONGODB NOT CONNECTED")
        process.exit(1); //there was an error
    }



}