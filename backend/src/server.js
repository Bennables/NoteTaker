import express from "express";
import noteRoutes from "./routes/noteRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5001;

const app = express();
console.log(process.env.connection)

app.use("/api/notes", noteRoutes);

connectDB();

app.listen(5001, () =>{
    console.log("Started connection port: 5001");
})