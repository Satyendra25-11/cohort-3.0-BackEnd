import React, { useEffect } from 'react'
import { useAuthContext } from '../context/useAuthContext'
import useApi from '../../shared/useApi'

const Profile = () => {
  
  const authContext = useAuthContext()
  const api = useApi()

  const fetchProfile = async()=>{
    const response = await api.get("/auth/me")

    authContext.setUser(response.data.data.user)
  }

  useEffect(()=>{
    fetchProfile()
  },[])




  return (
    <div>
      <h1>Profile</h1>
      <p>{authContext.user?.name}</p>
      <p>{authContext.user?.email}</p>
    </div>
  )
}

export default Profile