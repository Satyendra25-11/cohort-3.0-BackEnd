const express = require("express")
const { getAllNoteController, getSingleNoteController, createNoteController, updateNoteController, deleteNoteController, singleEntityUpdateController } = require("../controllers/notesApp.controller")

const router = express.Router()

router.get("/allNotes",getAllNoteController)
router.get("/:id",getSingleNoteController)
router.post("/create",createNoteController)
router.put("/:id",updateNoteController)
router.delete("/:id",deleteNoteController)
router.patch("/:id/single",singleEntityUpdateController)



module.exports = router