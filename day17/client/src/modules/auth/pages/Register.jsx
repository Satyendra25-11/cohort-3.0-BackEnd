import { useState } from "react"
import React  from 'react'
import {useNavigate} from 'react-router'
import { useAuth } from "../context/authContext"
import useApi from "../../../shared/api"



const Register = () => {

    const auth = useAuth()
    const navigate = useNavigate()
    const api = useApi()
    const [form, setForm] = useState({name:"", email:"", password:""})
    const [error, setError] = useState(null)

    const handleChange = (e)=>{
        setForm({...form, [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setError(null)
        console.log("error in register");
        
        try {
            const response = await api.post("/auth/register", form)
            console.log(response.data);
        } catch (error) {
            setError(error?.message || "Registration failed")
        }
    }



  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
        {error && <p>{error}</p>}
    </div>
  )
}

export default Register