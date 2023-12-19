/* eslint-disable jsx-a11y/img-redundant-alt */
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
import { ValidateUser, findUserById } from "../actions/actions";
import { baseurl } from "../commonHelpers/envi";
import { fetch } from "../commonHelpers/fetch";
import { ValidateSignUpSchema } from "./Validate";
import loginImg from '../../assets/login-img.png';

interface Values {
  userName: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state: any) => state.application);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  const register = () => {
    navigate("/registration");
  };
  const handleChange = () => { };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: ValidateSignUpSchema,
    onSubmit: (values) => {
      dispatch(ValidateUser(values, (data: any) => {
        if (data.status === "error") {
          alert("Wrong User name password");
        } else {
          sessionStorage.setItem("userData", "true");
          dispatch({
            type: Actiontypes.IS_USER_AUTHINTCATED,
            payload: true,
          });
          dispatch({
            type: Actiontypes.GET_VALIDATED_USER_DETAILS,
            payload: data,
          });
          sessionStorage.setItem('id', data.id);
          navigate("/home");
          // console.log('62....',data)
        }
      }))
    }
  });
  return (
    <React.Fragment>
      {/* <div className="container"> */}
      <div className="row">
        <div className="col-7 ps-4 img-container">
          <img src={loginImg} alt="Image" height='700' width='700' />
        </div>
        <div className="col-5">
          <div className="h-100 field-container">
            <div>
              <div>
                <div>
                  <h3 className="mb-3 d-flex justify-content-center">Sign In</h3>
                  <div className=" d-flex justify-content-center">
                    <form onSubmit={formik.handleSubmit}>
                      <div>
                        <div>
                          <TextField
                            id="filled-basic"
                            label="Email"
                            variant="filled"
                            name="email"

                            sx={{ width: "35ch" }}

                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.email && Boolean(formik.errors.email)
                            }

                          />
                        </div>
                      </div>
                      <div>

                        <div>
                          <FormControl
                            sx={{ width: "35ch", mt: 1 }}
                            variant="filled"
                          >
                            <InputLabel htmlFor="filled-adornment-password">
                              Password
                            </InputLabel>
                            <FilledInput
                              id="password"
                              name="password"
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={
                                formik.touched.password &&
                                Boolean(formik.errors.password)
                              }

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
        </div>
      </div>

      {/* </div> */}
    </React.Fragment>
  );
}

export default Login;
