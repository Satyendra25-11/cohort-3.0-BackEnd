const mongoose = require('mongoose')

const connectDb = async ()=>{
    try {
        mongoose.connect('mongodb+srv://vsatyendra9 {//something missing to protect it temporary} ster0.vu3obrk.mongodb.net/')
        console.log("database connected");
        
    } catch (error) {
        console.log("error in connection db",error);
        
    }
}

module.exports = connectDb;