import express from "express";

const router = express.Router();


//don't need /api/notes anymore because when called app.use, it prefixes what we put
router.get("/", (req, res) => {
    //get
    // res.send("HEHE");
    res.status(200).send("Getting the 10 notes you have");
})

router.post("/", (req, res) => {
    res.status(201).send("Posted a new note to the board");
})

router.put("/:id", (req, res) => {
    res.status(202).send("Updated the note");
})

router.delete("/:id"), (req, res) => {
    res.status(203).send("Deleted the note")
}


export default router;