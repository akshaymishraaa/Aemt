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
    alert("...");
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
        maxWidth="md"
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
              <label htmlFor="firstName">First Name</label>
              <Field id="firstName" name="firstName" placeholder="Jane" />
            </Form>
            {/* <button type="submit" onSubmit={submitHandler} >Submit</button> */}
          </Formik>
        </div>
      </CustomDialog>
    </>
  );
}

export default CreateUser;
