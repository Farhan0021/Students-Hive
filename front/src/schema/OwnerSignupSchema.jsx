import * as YUP from 'yup';

let OwnerSignupSchema = YUP.object({
   
    name :YUP.string().required("Insert Your Full Name"),
    email :YUP.string().required("Insert Email Id "),
    password :YUP.string().required("Insert Your Password"),
    repass :YUP.string().required("Insert Your RE-Password"),
    contact :YUP.string().required("Insert Your Contact Number"),
    address :YUP.string().required("Insert Your Full Address"),

})

export default OwnerSignupSchema;