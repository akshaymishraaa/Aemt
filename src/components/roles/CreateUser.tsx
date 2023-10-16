import { Alert, Button } from "@mui/material";
import React from "react";
import CustomDialog from "../../common/dialogBox/CustomDialog";
import { Formik, Field, Form } from "formik";
import ReactSelect from "../../common/selectBox/ReactSelect";
import { rolesOption, tabOptions } from "./SelectStaticOption";
import { useDispatch } from "react-redux";
import { createUser, getAllUserDetails } from "../actions/actions";
import { Actiontypes } from "../../types/ActionTypes";

function CreateUser() {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const dispatch = useDispatch();
  const onClose = () => {
    setOpen(false);
    setError(false);
  };

  const openDialog = () => {
    setOpen(true);
  };

  const submitHandler = (values: any) => {
    // console.log("17...", values);
    dispatch(createUser(values, (data: any) => {
      console.log('24......', data)
      if (data.status === "success") {
        onClose()

        dispatch(getAllUserDetails((data: any) => {
          dispatch({ type: Actiontypes.GET_ALL_USER_DATA, payload: data })
        }))
      } else if (data.status === 'error') {
        setError(true);
      }
    }))
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <Button onClick={openDialog}>Create User</Button>
      </div>
      <CustomDialog
        title={"Create User"}
        open={open}
        onClose={onClose}
        actionType={"Submit"}
        maxWidth="lg"
        fullWidth={true}
        form={"createUser"}
        onSubmitHandler={() => { }}
      >
        <div>
          {error && <p className="text-danger">Email id or Phone number already in use,Please try with another.</p>}
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              contactNo: "",
              password: "",
              role: "",
              allowedModule: "",
            }}
            onSubmit={(values: any) => submitHandler(values)}
          >
            {
              ({ values, errors, touched, setFieldValue }) => {
                return (
                  <Form id="createUser">
                    <div className="row ">
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <label htmlFor="firstName">First Name</label>
                        <div>
                          <Field
                            id="firstName"
                            name="firstName"
                            placeholder="Enter Your First Name"
                            value={values.firstName}
                          />
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <label htmlFor="firstName">Last Name</label>
                        <div>
                          <Field
                            id="lastName"
                            name="lastName"
                            placeholder="Enter Your Last Name"
                            value={values.lastName}
                          />
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <label htmlFor="firstName">Email</label>
                        <div>
                          <Field
                            id="email"
                            name="email"
                            placeholder="Enter Your email"
                            value={values.email}
                          />
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <label htmlFor="firstName">Phone no.</label>
                        <div>
                          <Field
                            id="number"
                            type="number"
                            name="contactNo"
                            placeholder="Enter your contact number"
                            value={values.contactNo}
                          />
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <label htmlFor="firstName">Pasword</label>
                        <div>
                          <Field
                            id="password"
                            name="password"
                            placeholder="Enter Your Password"
                            type="password"
                            value={values.password}
                          />
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <label htmlFor="firstName">Role</label>
                        <div>
                          <ReactSelect
                            name={"role"}
                            id={"role"}
                            placeHolder={"role"}
                            options={rolesOption}
                            value={values.role}
                            onChange={((e: any) => setFieldValue("role", e.value))}
                          />
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <label htmlFor="firstName">Allowed Module</label>
                        <div>
                          <ReactSelect
                            name={"allowedModule"}
                            id={"module"}
                            placeHolder={"Allowed module"}
                            value={values.allowedModule}
                            options={tabOptions}
                            onChange={((e: any) => setFieldValue("allowedModule", e.value))}
                          />
                        </div>
                      </div>
                    </div>
                  </Form>
                )
              }
            }
          </Formik>
        </div>
      </CustomDialog>
    </>
  );
}

export default CreateUser;
