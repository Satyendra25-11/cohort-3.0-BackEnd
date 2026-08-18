// const { log } = require('console')
// let http = require('http')
// let server = http.createServer((req, res)=>{
//     console.log("hey");  
// })
// server.listen(3000,()=>{
//     console.log("server is running on port 3000");
// })



const express = require("express")

const app = express()
let port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello world , welcome to backend development")                // THAT IS CALLED ROUTING IN EXPRESS JS
})

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
    
})