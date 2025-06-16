import express from "express";
import {getNote, postNote, putNote, deleteNote, getNoteByID} from "../controller/noteControllers.js"

const router = express.Router();


//don't need /api/notes anymore because when called app.use, it prefixes what we put
router.get("/", getNote);

router.post("/", postNote);

router.put("/:id", putNote);

router.delete("/:id" , deleteNote);

router.get("/:id", getNoteByID);


export default router;