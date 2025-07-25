import React, { useState } from 'react'
import Slider from '../../components/Slider'
import {useFormik} from 'formik'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Otp = () => {
  let [showPreeLoader, setShowPreloader] = useState(false);
  let [errMsg, setErrMsg] = useState("");
  let navigate = useNavigate();
  let otpFrm = useFormik({
    initialValues : {
      otp : ""
    },
    onSubmit : (formData)=>{
      setShowPreloader(true);
      axios.post(`${import.meta.env.VITE_API_URL}/seekerprofile/checkotp`, formData)
      .then(response=>{
        console.log(response.data);
        setShowPreloader(false);
        if(response.data.success==true){
          localStorage.setItem("userid-otp", response.data.userid)
          localStorage.setItem("email-otp", response.data.email)
          navigate("/seeker/change-password");
        }else{
          setErrMsg("Invalid OTP, Please Check your E-Mail Again !");
        }
      })
    }
  })

  return (
    <>
    <Slider />
    <div className="container" style={{minHeight : "700px"}}>
        <form onSubmit={otpFrm.handleSubmit}>
        <div className='row'>
            <div className="col-md-6 offset-md-3 my-4">
            <div className="card">
            <div className="card-header bg-green">
              <h4 className='text-light'>Insert OTP</h4>
              
            </div>
            <div className="card-body">
                <div className="my-3">
                    <label>OTP</label>
                    <input name='otp' onChange={otpFrm.handleChange} type='text' className='form-control' />
                    {
                      errMsg ? <small className='text-danger'>{errMsg}</small> : ''
                    }
                </div>
            </div>
            <div className="card-footer">
                <button type='submit' className='btn btn-primary'>Submit {showPreeLoader ? <span className='spinner-border spinner-border-sm'></span> : ''}</button>
            </div>
            </div>
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default Otp


// import React, { useState } from 'react'
// import Slider from '../../components/Slider'
// import {useFormik} from 'formik'
// import {useNavigate} from 'react-router-dom'
// import axios from 'axios'

// const Otp = () => {
//   let [showPreeLoader, setShowPreloader] = useState(false);
//   let [errMsg, setErrMsg] = useState("");
//   let navigate = useNavigate();

//   let otpFrm = useFormik({
//     initialValues : {
//       otp : ""
//     },
//     onSubmit : (formData)=>{
//       setShowPreloader(true);
//       axios.post(`${import.meta.env.VITE_API_URL}/seekerprofile/checkotp`, {
//         otp: formData.otp,
//         email: localStorage.getItem("email-otp") 
//       })
//       .then(response=>{
//         setShowPreloader(false);
//         if(response.data.success==true){
//           localStorage.setItem("userid-otp", response.data.userid)
//           localStorage.setItem("email-otp", response.data.email)
//           navigate("/seeker/change-password");
//         }else{
//           setErrMsg("Invalid OTP, Please Check your E-Mail Again !");
//         }
//       })
//     }
//   })

//   return (
//     <>
//     <Slider />
//     <div className="container" style={{minHeight : "700px"}}>
//         <form onSubmit={otpFrm.handleSubmit}>
//         <div className='row'>
//             <div className="col-md-6 offset-md-3 my-4">
//             <div className="card">
//             <div className="card-header bg-green">
//               <h4 className='text-light'>Insert OTP</h4>
//             </div>
//             <div className="card-body">
//                 <div className="my-3">
//                     <label>OTP</label>
//                     <input name='otp' onChange={otpFrm.handleChange} type='text' className='form-control' />
//                     {
//                       errMsg ? <small className='text-danger'>{errMsg}</small> : ''
//                     }
//                 </div>
//             </div>
//             <div className="card-footer">
//                 <button type='submit' className='btn btn-primary'>
//                   Submit {showPreeLoader ? <span className='spinner-border spinner-border-sm'></span> : ''}
//                 </button>
//             </div>
//             </div>
//             </div>
//         </div>
//         </form>
//     </div>
//     </>
//   )
// }

// export default Otp
