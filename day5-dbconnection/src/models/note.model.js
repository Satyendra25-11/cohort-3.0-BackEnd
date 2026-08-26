const mongoose = require("mongoose")

const notesSchema = new mongoose.Schema({
    title:{
        required:true,
        type:String,
    },
    description:{
        type:String,
        minlength:10
    }
})


let NotesModel = mongoose.model("notes",notesSchema)


module.exports = NotesModel
