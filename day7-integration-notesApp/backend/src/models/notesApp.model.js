const mongoose = require("mongoose")

let noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true,
        minlength:[20, "minimum 20 characters are required"]
    }
})

const noteModel = mongoose.model("notesApp",noteSchema)


module.exports = noteModel