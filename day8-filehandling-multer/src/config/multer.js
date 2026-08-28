const { models } = require("mongoose");
const multer = require("multer")


//for disk storage in pc
const storageForLocal = multer.diskStorage({
    destination:(req,file , cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        console.log("in filename", file);
        
        cb(null, Date.now() + file.originalname)
    }
})


//for server
const storageForServer = multer.memoryStorage()

const upload = multer({storage:storageForLocal})  //{storage:storage} => {storage}

module.exports = upload