import * as Yup from 'yup'
export const ValidateRegistration = Yup.object().shape({
    orgName: Yup.string().required("required"),
    orgMail: Yup.string().required("required").email("invalid Email"),
    orgType: Yup.string().required("required"),
    countryName: Yup.string().required("required"),
    stateName: Yup.string().required("required"),
    cityName: Yup.string().required("reqired"),
    orgPinCode: Yup.string().required("required"),
    orgContactNumber: Yup.string().required("required").max(10, "Cant Be More then 10digits"),
    registeredBy: Yup.string().required("required")

})
