const mongoose = require("mongoose")

const connectDB = async()=>{

    try {
        mongoose.connect(process.env.mongodb_uri)
        console.log("mongodb connected"); 
    } catch (error) {
        console.log("error in connecting db", error);
       
    }
}


module.exports = connectDB