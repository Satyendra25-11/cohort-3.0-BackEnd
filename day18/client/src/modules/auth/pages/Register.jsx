import React, { useState } from 'react'
import useApi from '../../shared/useApi'
import { useAuthContext } from '../context/useAuthContext'
import { useNavigate } from 'react-router'


const Register = () => {
    const api = useApi()
    const authContext = useAuthContext()

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async(event)=>{
        event.preventDefault()

        const response = await api.post("/auth/register",{
            name,
            email,
            password    
        })
        
        console.log(response.data);
        
        authContext.setAccessToken(response.data.accessToken)
        authContext.setUser(response.data.data.user)

        navigate("/profile")
    }





  return (
    <div>
        <form onSubmit={handleSubmit} className='flex-col flex p-5 gap-4' >
            <input onChange={e => setName(e.target.value)} type="text" placeholder='name' value={name} className='border p-2 rounded-sm' />
            <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' value={email} className='border p-2 rounded-sm' />
            <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' value={password} className='border p-2 rounded-sm' />
            <button type='submit' className='border bg-blue-300'>Submit</button>

        </form>
    </div>
  )
}

export default Register