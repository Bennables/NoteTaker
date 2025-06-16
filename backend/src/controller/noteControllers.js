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
        const {title, content} = req.body
        const newNote = new Note({title: title, content: content});

        //save is from the mongoose schema
        await newNote.save(); // this waits for confirmation from the newnote
        res.status(201).json({message: "Note saved successfully"});

    } catch (error) {
        console.error("Could not save new note", error);
        res.status(500).json({message: "Couldn't save the new note"});
    }
}

export const putNote = (req, res) => { 
    res.status(202).send("Updated the note");
}

export const deleteNote = (req, res) => {
    res.status(203).send("Deleted the note")
}

