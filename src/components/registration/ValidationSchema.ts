import * as Yup from 'yup'
export const ValidateRegistration = Yup.object().shape({
  organizationName: Yup.string().required("Required"),
  organizationEmailId: Yup.string().required("Required").email("invalid Email"),
  organizationType: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  contactNumber: Yup.number().nullable()
    .required("Required")
    .test('len', 'Max 6 numbers', (val: any) => val.toString().length <= 10),
  city: Yup.string().required("reqired"),
  regEmpId: Yup.string().required("Required"),
  zipCode: Yup.number().required("Required"),
  address: Yup.string().required("Required"),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string().required('Required').oneOf([Yup.ref('password')], "Should Be Same match With Password Field")
  // confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords don't match").required('Confirm Password is required'),
});
