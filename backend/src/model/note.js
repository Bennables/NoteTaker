//this file is to create a schema for a note

import mongoose from "mongoose";


// since this is a nosql database, we use json format
// code is self explanatory
const noteSchema = new mongoose.Schema(
    {
        title: {
            type:String,
            required:true,
        },
        content: {
            type:String,
            required:true,
        },

    },
    {timestamps:true}, //these are provided by mongodb by default
)

//creating a new note here
const Note = mongoose.model("Note", noteSchema)

//send it!
export default Note;