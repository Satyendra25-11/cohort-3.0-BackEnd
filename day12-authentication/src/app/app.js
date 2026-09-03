import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
dotenv.config()
import { authenticate } from "../middleware/auth.middleware.js";

const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to Authentication API",
  });
});


app.post("/api/auth/register", async (req, res) => {
  const { email, name, password } = req.body;

  const user = await userModel.create({
    email,
    name,
    password: await bcrypt.hash(password,10)
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.status(201).json({
    message: "User created successfully",
    data: {
      email,
      name,
      id: user._id,
    },
    token,
  });
});


app.get("/api/auth/me",authenticate, async (req,res)=>{
    console.log(req.user);

    res.status(200).json({
        data:{
            user: req.user
        }
    })
    
})

app.post("/api/auth/login",async(req,res)=>{

    const {email,password} = req.body
    const user = await userModel.findOne({email})
    const isValidPassword = await bcrypt.compare(password, user.password)

    console.log(isValidPassword);

    if(!isValidPassword){
        return res.status(400).json({
            "message":"Invalid email or password"
        })
    }

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.status(200).json({
        message:"User logged in successfully",
        data:{
            user:{
                email:user.email,
                name:user.name
            }
        }
    })
})


export default app;
