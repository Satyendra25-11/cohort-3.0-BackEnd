const express = require("express") 

const app = express()

app.use(express.json())
let port = 3000

let users = []

app.get('/',(req,res)=>{
    res.send(users) 
})

app.post('/create',(req,res)=>{
    let body = req.body
    users.push(body)
    res.send(users)
})

app.delete('/delete/:id', (req,res)=>{
    let {id} = req.params

    let userData = users.filter((val)=>{
        return val.id !== id
    }) 
    users = userData
    res.send(userData)
})


app.put('/update/:id',(req,res)=>{

    let {id} = req.params
    let {name } = req.body

    // let updateUser = users.find((val)=>{
    //     return val.id === id 
    // })
    // if(updateUser){
    //     updateUser =  {...updateUser, name}
    // }
    
    let updateUser = users.map((val)=>{
        return val.id === id ? {...val , name} : val
    })
    res.send(updateUser)
})



app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})