import Note from "../models/Note.js"

export const getNote = async (req, res) => {
    
    try {
        const notes = await Note.find();
        console.log(notes);
        res.status(200).json(notes);

    } catch (error) {
        console.log("Failed to get notes");
        res.status(500).json({message: "Internal server error"});
    }
}

export const postNote = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

export const putNote = (req, res) => { 
    res.status(202).send("Updated the note");
}

export const deleteNote = (req, res) => {
    res.status(203).send("Deleted the note")
}

