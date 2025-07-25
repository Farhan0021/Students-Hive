import * as YUP from 'yup';

let LoginSchema= YUP.object({
    email : YUP.string().email("Email Id is Invalid").required("Insert Your Email Id "),
    password : YUP.string().required("Insert Your Password Id ")
})

export default LoginSchema;