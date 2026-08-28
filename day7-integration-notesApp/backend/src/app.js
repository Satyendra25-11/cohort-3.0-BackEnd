const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
const router = require("./routes/note.routes")


const app = express()

app.use(cors({
    origin:"http://localhost:5173"
}))

app.use(express.json())
connectDB()

app.get("/",(req,res)=>{
    res.send("i get it")
})


app.use("/notes",router)

module.exports = app