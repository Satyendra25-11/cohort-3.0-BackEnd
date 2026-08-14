
let http = require('http')


let server = http.createServer((req,res)=>{
    console.log("hello i am server");
     res.end("i am listening to you")
})
server.listen(3000,()=>{
    console.log("server is runnign on port 3000");
})