import { readAccessToken } from "../utils/auth.util.js"



export function authenticate(req,res, next){
    const accessToken = req.headers.Authorization?.split(" ")[1]

    if(!accessToken){
        return res.status(400).json({
            message: "Access Token not found in the request header"
        })
    }

    try {
        
        const decoded = readAccessToken(accessToken)

        // const {userId, role} = decoded
        // req.user = {userId, role}

        req.user = decoded  // is line user property create ho rahi hai or jo bhi data accesstoken se aa rha hai bo asign ho rha hai req.user me
        next( )

    } catch (error) {
             res.status(401).json({
                message:"Invalid or expired access token"
            })
    }





}