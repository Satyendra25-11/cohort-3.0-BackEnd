import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'

const App = () => {


let {register,handleSubmit, reset } = useForm()

const submitHandler = async(data)=>{
  console.log(data);
  
  const formData = new FormData()
  formData.append("name",data.name)
  formData.append("email",data.email)
  for(let i=0; i< data.images.length;i++){
     formData.append("images",data.images[i])
  }
 

await axios.post("http://localhost:3000/user/create", formData)
}


  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input {...register("name")} type="text" placeholder='Enter your name'/>
        <input {...register("email")} type="email" placeholder='Enter your email'/>
        <input {...register("images")} multiple type="file" placeholder='Upload your profile pic'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App