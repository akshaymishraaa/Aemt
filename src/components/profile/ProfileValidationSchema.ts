import * as Yup from 'yup'
export const UserProfileValidation = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("invalid Email"),
  contactNo:Yup.number().required("Required"),
  role:Yup.string().required("Required"),
  allowedModule:Yup.string().required("Required"),
});