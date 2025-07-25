
import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const UpdatePass = () => {

  let navigate = useNavigate();
  let [errMsg, setErrMsg] = useState("");

    let passFrm = useFormik({
        initialValues : {
            password : "",
            newPass : "",
            confirm_newpass : ""
        },
        onSubmit : (formData)=>{
            axios.post(`${import.meta.env.VITE_API_URL}/seekerprofile/updatepass`, formData, {
                headers : {Authorization : localStorage.getItem("access-token")}
            })
            .then(response=>{
                //console.log(response.data);
                if(response.data.success==true){
                  toast("Your Password is Changed ", {onClose : ()=>{
                    navigate("/seeker/my-profile")
                  }})
                }
                else{
                  setErrMsg("Your Current Password is Wrong !");
                }
            })
        }
    })

    return (
         <div className="container my-4" style={{minHeight : "750px", paddingTop : "120px"}}>
          <ToastContainer theme='dark' />
      <div className='row'>
        <div className="col-md-3">
          <div className='alert alert-secondary'>
            <p className='m-0'>Hello</p>
            <h4>{ localStorage.getItem("name") }</h4>
          </div>
          <div className='alert alert-secondary'>
            <h6> <b>My Account</b></h6>
            <ul className='nav flex-column'>
              
              <li className='nav-item'>
                <NavLink to='/' className='nav-link'style={{ color: '#005555' }}> Enquiries <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/seeker/my-profile' className='nav-link'style={{ color: '#005555' }}> MY Profile <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              
              <li className='nav-item'>
                <NavLink to='/seeker/edit-profile' className='nav-link'style={{ color: '#005555' }}>Edit Profile  <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/seeker/update-password' className='nav-link 'style={{ color: '#005555' }}>Update Password  <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/seeker/logout' className='nav-link' style={{ color: '#005555' }}>Logout  <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              
              
             
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          <h4 style={{ color: '#005555' }}> <b>Update Password</b> </h4>
          {/* <form onSubmit={updateFrm.handleSubmit}>
            <div className="row">
              <div className="col-md-8 offset-md-2">

                  <div className="my-2">
                     <label>FULL NAME</label>
                     <input type="text" value={updateFrm.values.name} name="name" onChange={updateFrm.handleChange} className="form-control"/>
                  </div>
                  <div className="my-2">
                     <label>USERNAME / EMAIL</label>
                     <input type="text" value={updateFrm.values.email} name="email" onChange={updateFrm.handleChange} className="form-control" disabled />
                  </div>
                  <div className="my-2">
                     <label>CONTACT NUMBER :-</label>
                      <input type="text" value={updateFrm.values.contact} name="contact" onChange={updateFrm.handleChange} className="form-control"/>
                  </div>
                  <div className="my-2">
                     <label>ADDRESS </label>
                     <textarea  value={updateFrm.values.address} name="address" onChange={updateFrm.handleChange} className="form-control"></textarea>
                  </div>
                  <div className="my-2">
                     <label>GENDER </label>
                     <br/>
                     <br/>
                     MALE <input type="radio" name="gender" value='male' checked={updateFrm.values.gender=="male"} onChange={updateFrm.handleChange} />	&nbsp; 	&nbsp;
                    &nbsp;FEMALE <input type="radio" name="gender"  value="female" checked={updateFrm.values.gender=="female"} onChange={updateFrm.handleChange}/>
                  </div>
                  <div className="my-4">
                    <button  type="submit" className="btn  btn-primary w-100">UPDATE</button>
                  </div>

              </div>
            </div>

          

          </form> */}

            <form onSubmit={passFrm.handleSubmit}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="my-2">
                        <label>Current Password</label>
                        <input name='password' onChange={passFrm.handleChange} type='password' className='form-control' />
                        <small className='text-danger'>{errMsg}</small>
                    </div>
                    <div className="my-2">
                        <label>New Password</label>
                        <input name='newpass' onChange={passFrm.handleChange} type='password' className='form-control' />
                    </div>
                    <div className="my-2">
                        <label>Confirm New Password</label>
                        <input name='confirm_newpass' onChange={passFrm.handleChange} type='password' className='form-control' />
                    </div>
                     <div className="my-4">
                    <button  type="submit" className="btn  btn-primary w-100">UPDATE</button>
                  </div>
                </div>
            </div>
          </form>

        </div>
      </div>
    </div>
    )
}

export default UpdatePass




// import React, { useState } from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { useFormik } from 'formik'
// import axios from 'axios'
// import { ToastContainer, toast } from 'react-toastify'

// const UpdatePass = () => {
//     let navigate = useNavigate();
//     let [errMsg, setErrMsg] = useState("");

//     let passFrm = useFormik({
//         initialValues : {
//             password : "",
//             newpass : "",
//             confirm_newpass : ""
//         },
//         onSubmit : (formData)=>{
//             axios.post(`${import.meta.env.VITE_API_URL}/seekerprofile/updatepass`, formData, {
//                 headers : {Authorization : localStorage.getItem("access-token")}
//             })
//             .then(response=>{
//                 // console.log(response.data);
//                 if(response.data.success==true){
//                     toast("Your Password Updated Successfully....", {onClose : ()=>{
                    
//                               navigate("/seeker/my-profile")
//                             }});
//                 }   
//                 else{
//                     setErrMsg("Your Current Password is Wrong !");
//                 }
//             })
//         }
//     })

//   return (
//     <div className="container my-4" style={{minHeight : "750px", paddingTop : "120px"}}>
//         <ToastContainer theme="dark" />
//       <div className='row'>
//         <div className="col-md-3">
//           <div className='alert alert-secondary'>
//             <p className='m-0'>Hello</p>
//             <h4>{ localStorage.getItem("name") }</h4>
//           </div>
//           <div className='alert alert-secondary'>
//             <h6>My Account</h6>
//             <ul className='nav flex-column'>
              
//               <li className='nav-item'>
//                 <NavLink to='/' className='nav-link'>Enquiries  <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink to='/seeker/my-profile' className='nav-link'>My Profile  <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink to='/seeker/edit-profile' className='nav-link'>Edit Profile  <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink to='/seeker/update-password' className='nav-link'>Update Password  <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink to='/seeker/logout' className='nav-link'>Logout  <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
//               </li>
              
              
             
//             </ul>
//           </div>
//         </div>
//         <div className="col-md-9">
//           <h4>Update Password</h4>
//           <form onSubmit={passFrm.handleSubmit}>
//             <div className="row">
//                 <div className="col-md-8 offset-md-2">
//                     <div className="my-2">
//                         <label>Current Password</label>
//                         <input name='password' onChange={passFrm.handleChange} type='password' className='form-control' />
//                         <small className='text-danger'>{errMsg}</small>
//                     </div>
//                     <div className="my-2">
//                         <label>New Password</label>
//                         <input name='newpass' onChange={passFrm.handleChange} type='password' className='form-control' />
//                     </div>
//                     <div className="my-2">
//                         <label>Confirm New Password</label>
//                         <input name='confirm_newpass' onChange={passFrm.handleChange} type='password' className='form-control' />
//                     </div>
//                     <div className="my-2">
//                         <button type='submit' className='btn btn-primary'>Update</button>
//                     </div>
//                 </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UpdatePass