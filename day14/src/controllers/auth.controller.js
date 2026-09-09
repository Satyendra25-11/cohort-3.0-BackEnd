import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


export const register = async(req,res)=>{
    const {username, email, password} = req.body


    try {
          if(!username || !email || !password) return res.status(400).json({
        success: false,
        message: "email, username, password, are required"
    })

    const alreadyRegister = await userModel.findOne({email})

    console.log("already registered user ",alreadyRegister);
    

    if(alreadyRegister) return res.status(400).json({
        success: false,
        message: "User already exits"
    })

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hashPassword,
    })


    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    return res.status(201).json({
        success: true,
        message: "user is created",
        user,
        token
    })
    
    } catch (error) {
        console.log(error);
        
    }


}