import postModel from "../models/post.model.js";
import { sendFiles } from "../services/storage.service.js";

export const createPost = async (req, res)=>{

    try{
 let {caption} = req.body
    let file = req.file

    console.log(caption);
    console.log(file);

     if(!caption || !file) return res.send.status(400).json({
        success:false,
        message:"fields are required"
    })

    console.log("Uploading image...");
    console.time("Total request")
    const uploadImage =  await sendFiles(file.buffer.toString("base64"), file.originalname)
    console.log("upload completd");
    
    console.log(uploadImage);
    console.log("saving to mongodb...");
    
      const post = await postModel.create({
        caption,
        image:uploadImage.url
    })

    console.log("saved to mongodb");
    
    return res.status(201).json({
        success:true,
        message: "Post created successfully"
    })


    } catch(error){
        console.log(error)
        
        return res.status(500).json({
            success:false,
            error: error.message
        })
    }

    

   

    
  
    
}