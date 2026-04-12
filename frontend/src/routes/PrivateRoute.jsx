import React from 'react'
import {Navigate, Outlet} from "react-router-dom"

const PrivateRoute = ({ allowedRoles }) => {
  const isAuthenticated=true
  const userRole = 'admin'
  if(isAuthenticated){
    return allowedRoles.includes(userRole)
    ? <Outlet />
    : <Navigate to="/" replace />
  }
  return <Navigate to="/login" replace/>
  
}

export default PrivateRoute
