import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import './style/Styles.scss';
import { FilledInput, FormControl, IconButton, InputAdornment, InputLabel, TextField } from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";

interface Values {
  userName: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const register = () => {
    navigate("/registration");
  };
  return (
    <React.Fragment>
      {/* <div className="container"> */}
      <div className="h-100 mt-5 p-5">
        <div className="col-4 mx-auto">
          <div className="card">
            <div className="card-body">
              <h5 className="bg-primary p-3 text-light mb-3">Sign In</h5>
              <Formik
                initialValues={{
                  userName: "",
                  password: "",
                }}
                onSubmit={(values: any) => {
                 navigate('/dashboard')
                }}
              >
                <div className=" d-flex justify-content-center">
                  <Form>
                    <div>
                      {/* <label htmlFor="firstName">Username</label> */}
                      <div>
                        <TextField
                          id="filled-basic"
                          label="User name"
                          variant="filled"
                          sx={{ width: '25ch' }}
                        />
                      </div>
                    </div>
                    <div>
                      {/* <label htmlFor="lastName">Password</label> */}
                      <div>
                        <FormControl sx={{ width: '25ch', mt: 1 }} variant="filled">
                          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                          <FilledInput
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  // onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
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
                  </Form>
                </div>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
}

export default Login;
