import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({childeren}) => {
  const userdata = JSON.parse(localStorage.getItem("user"))
         const Authenticate = userdata ? true :false;
     return Authenticate ? (
        childeren
     ):(
       <Navigate to={"/"} replace />
     )
}

export default PrivateRoute