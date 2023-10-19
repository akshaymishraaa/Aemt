import React from "react";
import * as Yup from "yup";

export const validateUserSchema = Yup.object().shape({
  firstName: Yup.string().required("Please Enter First Name"),
  lastName:  Yup.string().required("Please Enter Last Name"),
  email: Yup.string().email('Enter a valid email').required("Please Enter Email"),
  contactNo: Yup.string().required("Please Enter Email"),
  password: Yup.string().required("Please Enter Email"),
  role: Yup.string().required("Please Enter Email"),
  allowedModule: Yup.string().required("Please Enter Email"),
});
