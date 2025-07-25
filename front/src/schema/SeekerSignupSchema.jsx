import * as YUP from 'yup';

let SeekerSignupSchema = YUP.object({
   
    name :YUP.string().required("Insert Your Full Name"),
    email :YUP.string().email("Invalid Your Id").required("Insert Email Id "),
    password :YUP.string().required("Insert Your Password"),
    repass :YUP.string().oneOf([YUP.ref("password")],"Password and Re-password Does not match").required("Insert Your RE-Password"),
    contact :YUP.number().typeError("Number Not Valid").required("Insert Your Contact Number"),
    address :YUP.string().required("Insert Your Full Address"),
    gender :YUP.string().required("Select Your Gender"),

})

export default SeekerSignupSchema;