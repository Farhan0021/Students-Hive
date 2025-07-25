import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

const MyProfile = () => {

  let [seeker, setSeeker] = useState({})
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/seekerprofile`, {
      headers : {Authorization : localStorage.getItem("access-token")}
    })
    .then(response=>{
      setSeeker(response.data[0]);
    })
  },[])

  return (

    <div className="container my-4" style={{minHeight : "750px", paddingTop : "120px"}}>
      <div className='row'>
        <div className="col-md-3">

          <div className='alert alert-secondary'>
            <p className='m-0'>Hello</p>
            <h4>{ localStorage.getItem("name") }</h4>
          </div>

          <div className='alert alert-secondary'>
            <h6> My Account </h6>
            <ul className='nav flex-column'>
              
              <li className='nav-item'>
                <NavLink to='/' className='nav-link'> Enquiries <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/seeker/my-profile' className='nav-link'> My Profile <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              
              <li className='nav-item'>
                <NavLink to='/seeker/edit-profile' className='nav-link'> Edit Profile <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/seeker/update-password' className='nav-link'> Update Password <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/seeker/logout' className='nav-link'> Logout <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
             
            </ul>
          </div>
        </div>
        
        <div className="col-md-9">
          <h4> My Personal Information </h4>
          <table className='table table-bordered table-hover table-secondary'>
            <tbody>

              <tr>
                <td>Full Name</td>
                <td>{seeker.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{seeker.email}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{seeker.gender}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{seeker.address}</td>
              </tr>
              <tr>
                <td>Contact</td>
                <td>{seeker.contact}</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MyProfile