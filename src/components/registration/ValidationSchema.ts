import * as Yup from 'yup'
export const ValidateRegistration = Yup.object().shape({
    orgName: Yup.string().required("required"),
    orgMail:Yup.string().required("required").email("invalid Email")

})
