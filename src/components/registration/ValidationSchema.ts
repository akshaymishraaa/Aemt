import * as Yup from "yup";
export const ValidateRegistration = Yup.object().shape({
    organizationName: Yup.string().required("required"),
  organizationEmailId: Yup.string().required("required").email("invalid Email"),
  organizationType: Yup.string().required("required"),
  country: Yup.string().required("required"),
  state: Yup.string().required("required"),
  city: Yup.string().required("reqired"),
  zipCode: Yup.number().required("required"),
  contactNumber: Yup.number()
    .required("required")
    .max(10, "Cant Be More then 10digits"),
  registeredBy: Yup.string().required("required"),
});
