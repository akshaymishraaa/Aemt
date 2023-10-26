import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./style/Styles.scss";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Actiontypes } from "../../types/ActionTypes";
import { ValidateOrganization } from "../actions/actions";
import { baseurl } from "../commonHelpers/envi";
import { fetch } from "../commonHelpers/fetch";
import { ValidateSignUpSchema } from "./Validate";

interface Values {
  userName: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orgDetails } = useSelector((state: any) => state.application);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const register = () => {
    navigate("/registration");
  };
  const handleChange = () => {};
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: ValidateSignUpSchema,
    onSubmit: (values) => {
      const url = `${baseurl}/validateUser`;
      fetch({
        url: url,
        method: "POST",
        data: { values },
      })
        .then((res: any) => {
          if (res.data.status === "error") {
            alert("Wrong User name password");
          } else {
            sessionStorage.setItem("userData", "true");
            dispatch({
              type: Actiontypes.IS_USER_AUTHINTCATED,
              payload: true,
            });
            navigate("/home");
          }
        })
        .catch((err: any) => console.log("Error...", err));

      
    },
  });
  return (
    <React.Fragment>
      {/* <div className="container"> */}
      <div className="h-100 mt-5 p-5">
        <div className="col-4 mx-auto">
          <div className="card">
            <div className="card-body">
              <h5 className="bg-primary p-3 text-light mb-3">Sign In</h5>
              {/* <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={ValidateSignUpSchema}
                onSubmit={(values: any) => {
                  // await dispatch(ValidateOrganization(values))
                  const url = `${baseurl}/validateOrg`;
                  fetch({
                    url: url,
                    method: "POST",
                    data: { values },
                  })
                    .then((res: any) => {
                      if (res.data.status === "error") {
                        alert("Wrong User name password");
                      } else {
                        sessionStorage.setItem("userData", "true");
                        dispatch({
                          type: Actiontypes.IS_USER_AUTHINTCATED,
                          payload: true,
                        });
                        navigate("/home");
                      }
                    })
                    .catch((err: any) => console.log("Error...", err));
                }}
              >
                {({ errors, touched, values, setFieldValue }) => {
                  return ( */}
              <div className=" d-flex justify-content-center">
                {/* <>{console.log("73...", errors)}</> */}
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <div>
                      <TextField
                        id="filled-basic"
                        label="Email"
                        variant="filled"
                        name="email"
                        // value={values.email}
                        sx={{ width: "25ch" }}
                        // onChange={(e: any) =>
                        //   setFieldValue("email", e.target.value)
                        // }
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        // helperText={formik.touched.email && formik.errors.email}
                      />
                    </div>
                  </div>
                  <div>
                    {/* <label htmlFor="lastName">Password</label> */}
                    <div>
                      <FormControl
                        sx={{ width: "25ch", mt: 1 }}
                        variant="filled"
                      >
                        <InputLabel htmlFor="filled-adornment-password">
                          Password
                        </InputLabel>
                        <FilledInput
                          id="password"
                          name="password"
                          // value={values.password}
                          // onChange={(e: any) =>
                          //   setFieldValue("password", e.target.value)
                          // }
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                          }
                          // helperText={
                          //   formik.touched.password && formik.errors.password
                          // }
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                // onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className="link-primary mt-3" onClick={register}>
                    Not a user! Register now?
                  </div>
                  <button className=" mt-2 btn btn-success w-100" type="submit">
                    Submit
                  </button>
                </form>
              </div>
              {/* );
                }}
              </Formik> */}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
}

export default Login;
