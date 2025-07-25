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
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="details/:id" element={<Details />} />
      <Route path="seeker/login" element={<SeekerLogin />} />
      <Route path="seeker/signup" element={<SeekerSignup />} />
      <Route path="seeker/forgot-password" element={<ForgotPassword />} />
      <Route path="seeker/otp" element={<Otp />} />
      <Route path="seeker/change-password" element={<ChangePassword />} />

      <Route path="owner/login" element={<OwnerLogin />} />
      <Route path="owner/signup" element={<OwnerSignup />} />

      {/* Seeker Protected Routes */}
      <Route path="seeker" element={<SeekerProtactedRoutes />}>
        <Route path="my-profile" element={<Myprofile />} />
        <Route path="edit-profile" element={<EditProfile />} />
        <Route path="update-password" element={<UpdatePass />} />
        <Route path="logout" element={<SeekerLogout />} />
      </Route>

      {/* Owner Protected Routes */}
      <Route path="owner" element={<OwnerProtactedRoutes />}>
        <Route path="add-new-property" element={<AddNew />} />
        <Route path="my-property" element={<MyProperty />} />
        <Route path="my-account" element={<MyAccount />} />
        <Route path="logout" element={<OwnerLogout />} />
        <Route path="messages/:id" element={<Messages />} />
      </Route>
    </Routes>
  )
}

export default AllRoutes
