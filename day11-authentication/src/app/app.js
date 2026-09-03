import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()
app.use(express.json())

app.get('/api',(req,res)=>{
    res.status(200).json({
        message:"Welcome to Authentication API"
    })
})
app.post("/api/auth/register",(req,res)=>{
    const {email, name, password} = req.body

    const token = jwt.sign({
        email,
        name
    },"49c0c0c5001d34d8a0a00577b87e6f20c38fc5698086c57304d53bfc7d8e17df")

    res.status(201).json({
        message:"User created successfully",
        data:{
            email,name
        },
        token
    })
})
export default app