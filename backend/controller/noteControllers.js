export const getNote = (req, res) => {
    //get
    // res.send("HEHE");
    res.status(200).send("Getting the notes you have");
}

export const postNote = (req, res) => {
    res.status(201).send("Posted a new note to the board");
}

export const putNote = (req, res) => { 
    res.status(202).send("Updated the note");
}

export const deleteNote = (req, res) => {
    res.status(203).send("Deleted the note")
}

