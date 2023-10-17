import * as Yup from 'yup';

export const ValidateSignUpSchema = Yup.object().shape({
   email: Yup.string()
   .email('Enter a valid email')
   .required("Please enter Email"),
   password: Yup.string().required("Please Enter Passwordd")
})