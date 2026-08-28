const noteModel = require("../models/notesApp.model")


let getAllNoteController = async(req,res)=>{
   try {
     let allNotes = await noteModel.find()
    return res.status(200).json({
        message:"All Notes Fetched",
        data: allNotes
    })
   } catch (error) {
    return res.status(500).json({
        message:"Internal server error"
    })
   }
}

let createNoteController = async(req,res)=>{
    try {
        let {title, description} = req.body
        let newNote = await noteModel.create({
            title,
            description
        })
        return res.status(201).json({
            message:"Note created successfully",
            data: newNote
        })
    } catch (error) {

        console.log(error);
        

        return res.status(500).json({
            message:"Internal server error"
        })
    }
}

let getSingleNoteController = async(req,res)=>{
    try {
        let noteId = req.params.id
        let note = await noteModel.findById(noteId)
        return res.status(200).json({
            message:"Fetched single Note",
            data: note
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}

let updateNoteController = async(req,res)=>{
    try {
        let noteId = req.params.id
        let newData = req.body
        let updateNote = await noteModel.findByIdAndUpdate(noteId, newData ,{new:true})
        return res.status(200).json({
            message:"Note updated successfully",
            data: updateNote
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

let deleteNoteController = async (req,res)=>{
    try {
        let noteId = req.params.id
        await noteModel.findByIdAndDelete(noteId)
        res.status(200).json({
            message:"Note deleted successfully",
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}

let singleEntityUpdateController = async (req,res)=>{
    try {
        let noteId = req.params.id
        let body = req.body

        let updatedNote = await noteModel.findByIdAndUpdate(noteId, body , {new:true})

        return res.status(200).json({
            message:"Note Updated successfully",
            data : updatedNote
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports = {getAllNoteController, createNoteController, getSingleNoteController, updateNoteController,deleteNoteController, singleEntityUpdateController}