const express = require("express")
const {createNotesController, getAllNotesController, getSingleNoteController, updateNotesController, deleteNoteController} = require("../controllers/notes.controller")
const NotesModel = require("../models/notes.model")

const router = express.Router()


router.post('/create',createNotesController)   //("/router", controller)
router.get('/allNotes',getAllNotesController)
router.get('/:id',getSingleNoteController)
router.put("/:id",updateNotesController)
router.delete("/:id",deleteNoteController)

module.exports = router