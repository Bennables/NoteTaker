import express from "express";


const app = express();

app.get("/api/notes", (req, res) => {
    //get
    // res.send("HEHE");
    res.status(200).send("You have 5 notes");
})

app.post("/api/notes", (req, res) => {
    res.status(201).send("New Note!");
})

app.put("/api/notes/:id", (req, res) => {
    res.status(202).send("Updated successfully");
})

app.delete("/api/nots/:id"), (req, res) => {
    res.status(203).send("Successfully deleted")
}

app.listen(5001, () =>{
    console.log("Started connection port: 5001");
})