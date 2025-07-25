import React from 'react'
import Slider from '../../components/Slider'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const ChangePassword = () => {
  let navigate = useNavigate();
  let changePassFrm = useFormik({
    initialValues : {
      password : "",
      repass : ''
    },
    onSubmit : (formData)=>{
      formData.userid = localStorage.getItem("userid-otp");
      axios.post(`${import.meta.env.VITE_API_URL}/seekerprofile/changepass`, formData)
      .then(response=>{
         toast("Password Change Successfully.... ", {onClose : ()=>{
              localStorage.removeItem("userid-otp")    
              localStorage.removeItem("email-otp")    
              navigate("/seeker/login")
            }});
      })

    }
  })

  return (
    <>
    <Slider />
    <ToastContainer theme="dark" />
    <div className="container" style={{minHeight : "700px"}}>
        <form onSubmit={changePassFrm.handleSubmit}>
        <div className='row'>
            <div className="col-md-6 offset-md-3 my-4">
            <div className="card">
            <div className="card-header bg-green">
              <h4 className='text-light'>Change Your Password</h4>
              
            </div>
            <div className="card-body">
                <p>Change Your Password of Email/Username <b>{localStorage.getItem("email-otp")}</b></p>
                <div className="my-3">
                    <label>New Password</label>
                    <input name='password' onChange={changePassFrm.handleChange} type='password' className='form-control' />
                    
                </div>
                <div className="my-3">
                    <label>Confirm New Password</label>
                    <input name='repass'  onChange={changePassFrm.handleChange} type='password' className='form-control' />
                    
                </div>
            </div>
            <div className="card-footer">
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
            </div>
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default ChangePassword