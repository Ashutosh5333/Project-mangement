import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const userdata = JSON.parse(localStorage.getItem("user"))
         const Authenticate = userdata ? true :false;
   

     return Authenticate ? (
        children
     ):(
       <Navigate to="/" replace />
     )
}

export default PrivateRoute
