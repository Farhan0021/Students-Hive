import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
    Home,
SeekerLogin,
SeekerSignup,
OwnerLogin,
OwnerSignup,
Details,
SeekerLogout,
OwnerLogout
} from '../pages'
import Myprofile from '../pages/seekers/MyProfile'
import SeekerProtactedRoutes from './SeekerProtactedRoutes'
import OwnerProtactedRoutes from './OwnerProtactedRoutes'
import MyAccount from '../pages/owner/MyAccount'
import Messages from '../pages/owner/Messages'
import AddNew from '../pages/owner/AddNew'
import MyProperty from '../pages/owner/MyProperty'
import EditProfile from '../pages/seekers/EditProfile'
import UpdatePass from '../pages/seekers/UpdatePass'
import ForgotPassword from '../pages/seekers/ForgotPassword'
import Otp from '../pages/seekers/Otp'
import ChangePassword from '../pages/seekers/ChangePassword'
const AllRoutes = () => {
    return(
        <>
        <Routes>
            <Route path='' element= { <Home/>}/>
            <Route path='details/:id' element={<Details/>}/>
            <Route path='seeker/login' element={<SeekerLogin/>}/>
            <Route path='seeker/forgot-password' element={<ForgotPassword/>}/>
            <Route path='seeker/otp' element={<Otp />} />
            <Route path='seeker/change-password' element={<ChangePassword />} />
            <Route path='' element={<SeekerProtactedRoutes/>}>

            <Route path='seeker/my-profile' element={<Myprofile/>}/>
            <Route path='seeker/update-password' element={<UpdatePass/>}/>
            <Route path='seeker/edit-profile' element={<EditProfile/>}/>
            <Route path='seeker/logout' element={<SeekerLogout/>}/>

            </Route>

            <Route path='seeker/Signup' element={<SeekerSignup/>}/>

            <Route path='owner/Login' element={<OwnerLogin/>}/>
            <Route path='owner/Signup' element={<OwnerSignup/>}/>

            <Route path='' element={<OwnerProtactedRoutes/>}>

            <Route path='owner/add-new-property' element={<AddNew/>}/>
            <Route path='owner/my-property' element={<MyProperty/>}/>
            
            <Route path='owner/my-account' element={<MyAccount/>}/>
            <Route path='owner/logout' element={<OwnerLogout/>}/>
            <Route path='owner/messages/:id' element={<Messages />} />

            </Route>
            

        </Routes>

     </>

    )
}
export default AllRoutes 