import { Alert, Button } from "@mui/material";
import React from "react";
import CustomDialog from "../../common/dialogBox/CustomDialog";
import { Formik, Field, Form } from "formik";

function CreateUser() {
  const [open, setOpen] = React.useState(false);
  const onClose = () => {
    setOpen(false);
  };

  const openDialog = () => {
    setOpen(true);
  };

  const submitHandler = (values: any) => {
    console.log("17...", values);
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
        onSubmitHandler={() => {}}
      >
        <div>
          <Formik
            initialValues={{
              firstName: "",
            }}
            onSubmit={(values: any) => submitHandler(values)}
          >
            <Form id="createUser">
              <div className="row ">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <label htmlFor="firstName">First Name</label>
                  <div>
                    <Field
                      id="firstName"
                      name="firstName"
                      placeholder="Enter Your First Name"
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
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <label htmlFor="firstName">Pasword</label>
                  <div>
                    <Field
                      id="password"
                      name="Password"
                      placeholder="Enter Your Password"
                      type="password"
                    />
                  </div>
                </div>
              </div>
            </Form>
            {/* <button type="submit" onSubmit={submitHandler} >Submit</button> */}
          </Formik>
        </div>
      </CustomDialog>
    </>
  );
}

export default CreateUser;
