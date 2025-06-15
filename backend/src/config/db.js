import mongoose from "mongoose";
import {connection} from "../key.js"

export const connectDB = async ()=>{
    try {
        await mongoose.connect(connection);
        console.log("SUCCESSFULLY CONNECTED MONGODB")
    } catch (error) {
        console.error("MONGODB NOT CONNECTED")
        process.exit(1); //there was an error
    }



}