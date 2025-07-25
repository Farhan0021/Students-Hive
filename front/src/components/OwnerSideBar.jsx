import React from 'react'
import {NavLink} from 'react-router-dom'

const OwnerSideBar = () => {
  return (
     <div className="col-md-3">
          <div className="alert alert-secondary">
            <p className='m-0'>Hello</p>
            <h4>{localStorage.getItem("owner-name")}</h4>
          </div>
          <div className="alert alert-secondary">
            <h6>My Propeties</h6>
            <ul className='nav flex-column'>

            <li className='nav-item'>
              <NavLink to='/owner/add-new-property' className='nav-link'>ADD New <i class="fa fa-angle-right" aria-hidden="true"></i> </NavLink>
            </li>
             <li className='nav-item'>
              <NavLink to='/owner/my-property' className='nav-link'>My Property<i class="fa fa-angle-right" aria-hidden="true"></i> </NavLink>
            </li>
             <li className='nav-item'>
              <a href='' className='nav-link'>Rent-Out <i class="fa fa-angle-right" aria-hidden="true"></i> </a>
            </li>
             <li className='nav-item'>
              <a href='' className='nav-link'>For Rent <i class="fa fa-angle-right" aria-hidden="true"></i> </a>
            </li>
             <li className='nav-item'>
              <a href='' className='nav-link'>Sell <i class="fa fa-angle-right" aria-hidden="true"></i> </a>
            </li>
            <li className='nav-item'>
              <a href='' className='nav-link'>Logout <i class="fa fa-angle-right" aria-hidden="true"></i> </a>
            </li>

            </ul>
          </div>
        </div>
        
  )
}

export default OwnerSideBar