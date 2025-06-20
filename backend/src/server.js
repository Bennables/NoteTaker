import express from "express";
import noteRoutes from "./routes/noteRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js"
import cors from "cors"
import path from "path"

dotenv.config();
const PORT = process.env.PORT || 5001;

const app = express();
const __dirname = path.resolve()

console.log(process.env.CONNECTION)


if (process.env.NODE_ENV !== "production"){
    app.use(
    //allows ports to connect, off by default
    cors()
)
}

//allows use to get req.body
app.use(express.json());


//optional middlear, more useful if we had auth
app.use(rateLimiter);



//middleware: often used for auth on server side
app.use((req, res, next) =>{
    //the way that I understand this.
    // we call the func in nextRoutes, req and res is the same, but now we add
    // next, which is         v this v
    //router.delete("/:id" , deleteNote);
    
    //it's processing after the get the req but before we call any functions.
    console.log("We got a request");
    console.log(`The method is ${req.method} and the url is ${req.url}`);
    next();
})

app.use("/api/notes", noteRoutes);



if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    
    // this is for any other path
    app.get("*", (req, res)=>{
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    })
}

await connectDB();
app.listen(PORT, () =>{
    console.log("Started connection port: ", PORT);
})