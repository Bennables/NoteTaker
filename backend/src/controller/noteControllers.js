import Note from "../models/Note.js"

export const getNote = async (req, res) => {
    
    try {
        //                                             need to put in quotes, vid didn't
        const notes = await Note.find().sort({createdAt : "-1"});
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
        const savedNote = await newNote.save(); // this waits for confirmation from the newnote

        res.status(201).json({message: "Note saved successfully", savedNote});

    } catch (error) {
        console.log("Could not save new note", error);
        res.status(500).json({message: "Couldn't save the new note"});
    }
}

export const putNote = async (req, res) => { 
    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content});
        if(!updatedNote){
            return res.status(404).json({message: "Note not found"});
        }
        res.status(200).json({message: "note updated successfully"});

    } catch (error){
        console.log("Could not update note", error);
        res.status(500).json({message: "Couldn't update note"});
    }
}

export const deleteNote = async(req, res) => {
    try {
        const deleted = await Note.findByIdAndDelete(req.params.id);
        if(!deleted){return res.status(404).json({message: "That note was not found"})};
        res.status(200).json({message: "note deleted successfully"});
    } catch (error) {
        console.log("Failed to delete the note");
        res.status(500).json({message: "Couldn't delete the note"});
    }
}



export const getNoteByID = async (req, res) =>{
    try {
        const note = await Note.findById(req.params.id);
        if (!note){
            return res.status(404).json({message: "Note was unable to be found"});
        }
        res.status(200).json(note);
    } catch (error) {
        console.log("Failed to get the note");
        res.status(500).json({message: "Couldn't get the note"});
    }
    
}