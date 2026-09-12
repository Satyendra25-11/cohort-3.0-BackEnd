import React from 'react'
import "./app.css" 
import routes from './app.route'
import {RouterProvider} from 'react-router'
import { AuthProvider } from '../modules/auth/context/authContext'




const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  )
}

export default App