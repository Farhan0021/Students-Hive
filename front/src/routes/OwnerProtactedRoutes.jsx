import React from 'react'
import { useEffect } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'

const OwnerProtactedRoutes = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        if(! localStorage.getItem("owner-access-token")){
            navigate("/owner/login");
        }
    })
  return (
    <Outlet />
  )
}

export default OwnerProtactedRoutes