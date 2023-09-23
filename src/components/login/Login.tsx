import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";

interface Values {
  userName: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();

  const register = () => {
    navigate("/Register");
  };
  return (
    <React.Fragment>
      {/* <div className="container"> */}
        <div className="h-100 mt-5">
          <div className="col-4 mx-auto">
            <div className="card">
              <div className="card-body">
                <h5>Sign In</h5>
                <Formik
                  initialValues={{
                    userName: "",
                    password: "",
                  }}
                  onSubmit={(values: any) => {
                    console.log("values...", values);
                  }}
                >
                  <Form>
                    <div>
                      <label htmlFor="firstName">Username</label>
                      <div>
                        <Field
                          id="userName"
                          name="userName"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="lastName">Password</label>
                      <div>
                        <Field
                          id="password"
                          name="password"
                          type="password"
                          placeholder="password"
                        />
                      </div>
                    </div>
                    <div className="link-primary" onClick={register}>
                      Register Organisation
                    </div>
                    <button className=" mt-2 btn btn-primary" type="submit">
                      Submit
                    </button>
                  </Form>
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
