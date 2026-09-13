import mongoose from 'mongoose'
import config from './config.js'

async function  connectB() {
    await mongoose.connect(config.MONGO_URI)

    console.log("mongodb connected");
    
}

export default connectB