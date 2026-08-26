const mongoose = require('mongoose')

const connectDb = async ()=>{
    try {
        mongoose.connect('mongodb+srv://vsatyendra91_db_user:BHHpnR0tDMt2pCPX@cluster0.vu3obrk.mongodb.net/')
        console.log("database connected");
        
    } catch (error) {
        console.log("error in connection db",error);
        
    }
}

module.exports = connectDb;