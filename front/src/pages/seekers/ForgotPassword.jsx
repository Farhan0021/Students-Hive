// import React, { useState } from "react"
// import Slider from "../../components/Slider"
// import { useFormik } from "formik"
// import axios from "axios"
// import {useNavigate} from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify'

// const ForgotPassword = () => {

//     let navigate = useNavigate();
//     let [showPreeLoader, setShowPreLoader] = useState(false);
//     let [errMsg, setErrMsg] = useState("");
//     let forgotFrm = useFormik({
//         initialValues : {
//             username : ""
//         },
//         onSubmit : (FormData)=>{
//             setShowPreLoader(true);
//             axios.post(`${import.meta.env.VITE_API_URL}/seekerprofile/getotp`, FormData)
//             .then(response=>{
//                 setShowPreLoader(false)
//                 if(response.data.success==true){
//                     // navigate("/seeker/otp")
//                     toast("OTP SenT to Your EMAIL ", {onClose : ()=>{
//                         navigate("/seeker/login")
//                     }});
//                 }else{
//                     setErrMsg("THis Username/Email Does Not Exist  !");
//                 }
//             })
//         }
//     })

//     return (
//         <>
//         <Slider/>
//         <ToastContainer theme="dark" />
//         <div className="container" style={{minHeigh : "700px"}}>

//             <form onSubmit={forgotFrm.handleSubmit}>

//           <div className="row">
//             <div className="col-md-6 offset-md-3">
//                 <div className="card">

//                     <div className="card-header bg-green ">
//                         <h4 className="text-light " >Forgot Password</h4>
//                     </div>

//                     <div className="card-body">
//                         <div className="my-3">
//                             <label>Username/Email</label>
//                             <input name='username' onChange={forgotFrm.handleChange} type="text" className="form-control" />
//                             <small className="text-danger">{errMsg}</small>
//                         </div>
//                     </div>

//                     <div className="card-footer">
//                         <button type="submit" className="btn btn-primary w-100">GET OTP {showPreeLoader ? <span className="spinner-border spinner-border-sm"></span> : '' } </button>
//                     </div>

//                 </div>
//             </div>
//          </div>
//          </form>
//         </div>
//       </>
//     )
// }

// export default ForgotPassword

import React, { useState } from 'react'
import Slider from '../../components/Slider'
import { useFormik } from 'formik'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const ForgotPassword = () => {
    let navigate = useNavigate();
    let [showPreeLoader, setShowPreloader] = useState(false);
    let [errMsg, setErrMsg] = useState("");
    let forgotFrm = useFormik({
        initialValues : {
            username : ""
        },
        onSubmit : (formData)=>{
            setShowPreloader(true);
            axios.post(`${import.meta.env.VITE_API_URL}/seekerprofile/getotp`, formData)
            .then(response=>{
                setShowPreloader(false);
                if(response.data.success==true){
                    toast("OTP Send to your Mail Id....", {onClose : ()=>{
                    
                              navigate("/seeker/otp")
                            }});
                }else{
                    setErrMsg("This Username/Email does not exists !");
                }
            })
        }
    })

  return (
    <>
    <Slider />
    <ToastContainer theme="dark" />
    <div className="container" style={{minHeight : "700px"}}>
        <form onSubmit={forgotFrm.handleSubmit}>
        <div className='row'>
            <div className="col-md-6 offset-md-3 my-4">
            <div className="card">
            <div className="card-header bg-green">
              <h4 className='text-light'>Forgot Password</h4>
              
            </div>
            <div className="card-body">
                <div className="my-3">
                    <label>Username/Email</label>
                    <input name='username' onChange={forgotFrm.handleChange} type='text' className='form-control' />
                    <small className='text-danger'>{errMsg}</small>
                </div>
            </div>
            <div className="card-footer">
                <button type='submit' className='btn btn-primary'>Get OTP {showPreeLoader ? <span className='spinner-border spinner-border-sm'></span> : ''} </button>
            </div>
            </div>
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default ForgotPassword