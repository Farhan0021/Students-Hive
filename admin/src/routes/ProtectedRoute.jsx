import React, {useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
const ProtectedRoute = () => {
  let navigate = useNavigate();

  useEffect(()=>{
    if(! localStorage.getItem("access-token")){
      navigate("/");
    }

  },[])



  return (
     <div className="wrapper">
    
    <Sidebar />
    <div className="main-panel">
      <Header />
      <Outlet/>
    </div>
  </div>
       
  )
}

export default ProtectedRoute