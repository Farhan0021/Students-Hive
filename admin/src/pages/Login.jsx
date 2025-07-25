import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import  { useState } from 'react';


const Login = () => {
  let [errMsg, setErrMsg] = useState("");
  let navigate = useNavigate();
  let loginFrm = useFormik({
    initialValues : {
      username : "",
      password : ""
    },
    onSubmit : (formData)=>{
      axios.post("http://localhost:3000/api/v1/adminauth", formData)
      .then(response=>{
        if(response.data.success==true){
          localStorage.setItem("access-token", response.data.token);
          localStorage.setItem("name", response.data.name);
          navigate("/dashboard");
        }
        else{
          if(response.data.errType==1){
            setErrMsg("This username and Password is Incorrect")
          }
          if(response.data.errType==2){
            setErrMsg("This Password is Incorrect")

          }
        }

    })
    }
  })


  return (
    <div className='container mt-5'>
      <form onSubmit={loginFrm.handleSubmit}>
      <div className='row'>
        <div className='col-md-4 offset-md-4 mt-5'>
          <div className="card bg-dark">
            <div className="card-header">
              <h4 className='text-light'>ADMINISTRATOR LOGIN</h4>
            </div>
            <div className="card-body">
              <div className="my-4">
                <input name='username' onChange={loginFrm.handleChange} type='text' className='form-control' placeholder='Username' />
                </div>
                <div className="my-4">
                 <input  name='password' onChange={loginFrm.handleChange} type='password' className='form-control' placeholder='Password' />
                 </div>
                 <p className='text-light text-center'>
                  {
                    errMsg
                  }
                 </p>
              </div>
            <div className="card-footer">
              <button type='submit' className='btn btn-light'>LOGIN</button>
              </div>
              </div>
            </div>
          </div>
          </form>
        </div>
    
  )
}

export default Login