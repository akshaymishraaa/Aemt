import * as Yup from 'yup'
export const ValidateRegistration = Yup.object().shape({
  organizationName: Yup.string().required("required"),
  organizationEmailId: Yup.string().required("required").email("invalid Email"),
  organizationType: Yup.string().required("required"),
  country: Yup.string().required("required"),
  state: Yup.string().required("required"),
  contactNumber: Yup.number().nullable()
    .required("required")
    .test('len', 'Max 6 numbers', (val: any) => val.toString().length <= 10),
  city: Yup.string().required("reqired"),
  regEmpId: Yup.string().required("required"),
  zipCode: Yup.number().required("required"),
  address: Yup.string().required("required")
});
