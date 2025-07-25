import React from 'react'
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'

const SeekerProtactedRoutes = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        if(! localStorage.getItem("access-token")){
            navigate("/seeker/login")
        }
    },[])
    return ( 
        <Outlet />
    )
}

export default SeekerProtactedRoutes