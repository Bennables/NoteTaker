import express from "express";
import noteRoutes from "./routes/noteRoutes.js"
import { connectDB } from "./config/db.js";

const app = express();

app.use("/api/notes", noteRoutes);

connectDB();

app.listen(5001, () =>{
    console.log("Started connection port: 5001");
})