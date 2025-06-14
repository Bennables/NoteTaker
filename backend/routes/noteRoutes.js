import express from "express";
import {getNote, postNote, putNote, deleteNote} from "../controller/noteControllers.js"

const router = express.Router();


//don't need /api/notes anymore because when called app.use, it prefixes what we put
router.get("/", getNote);

router.post("/", postNote);

router.put("/:id", putNote);

router.delete("/:id" , deleteNote);


export default router;