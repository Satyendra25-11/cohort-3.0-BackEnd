const express = require("express")
const createController = require("../controllers/user.controller")
const upload = require("../config/multer.config")

const router = express.Router()

router.post("/create",upload.array("images",3),createController)

module.exports = router