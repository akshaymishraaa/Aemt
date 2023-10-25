import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import ReactSelect from "../../common/selectBox/ReactSelect";
import { useDispatch, useSelector } from "react-redux";
import {
    createUser,
    fetchAllTabs,
    getAllUserDetails,
} from "../actions/actions";
import { Actiontypes } from "../../types/ActionTypes";
import { validateUserSchema } from "../roles/helpers/validate";


function CreateSuperUser() {
    const [error, setError] = React.useState(false);
    const { tabs, recentOrganizationName } = useSelector((state: any) => state.application);
    const dispatch = useDispatch();

    const tabOptions = recentOrganizationName.modules?.map((item: any, index: any) => {
        let optionObject = { label: "", value: "" };
        optionObject.label = item;
        optionObject.value = item;
        return optionObject;
    });
    const rolesOption = recentOrganizationName?.role.map((item: any, index: any) => {
        let optionObject = { label: '', value: '' }
        optionObject.label = item.label;
        optionObject.value = item.value;
        return optionObject;
    });

    useEffect(() => {
        dispatch(
            fetchAllTabs((data: any) => {
                console.log("25....", data);
                dispatch({ type: Actiontypes.GET_ALL_TABS, payload: data });
            })
        );

    }, []);

    const submitHandler = (values: any) => {
        // console.log("17...", values);
        dispatch(
            createUser(values, (data: any) => {
                console.log("24......", data);
                if (data.status === "success") {
                    // onClose();

                    dispatch(
                        getAllUserDetails((data: any) => {
                            dispatch({ type: Actiontypes.GET_ALL_USER_DATA, payload: data });
                        })
                    );
                } else if (data.status === "error") {
                    setError(true);
                }
            })
        );
    };

    return (
        <div className="container-fluid d-flex justify-content-center mt-5">
            <div className="border border-1 p-5">
                <h3>Create super user for access application</h3>
                <hr />
                <Formik
                    initialValues={{
                        orgName: recentOrganizationName.organization,
                        firstName: "",
                        lastName: "",
                        email: "",
                        contactNo: "",
                        password: "",
                        role: "",
                        allowedModule: [],
                    }}
                    validationSchema={validateUserSchema}
                    onSubmit={(values: any) => submitHandler(values)}
                >
                    {({ values, errors, touched, setFieldValue }) => {
                        return (
                            <Form id="createUser">
                                <div className="row">
                                    <>{console.log("101....", errors, values)}</>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                        <label htmlFor="firstName">Organization Name</label>
                                        <div>
                                            <Field
                                                id="orgName"
                                                name="orgName"
                                                value={values.orgName}
                                                disabled
                                            />
                                            <ErrorMessage
                                                name="orgName"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                        <label htmlFor="firstName">First Name</label>
                                        <div>
                                            <Field
                                                id="firstName"
                                                name="firstName"
                                                placeholder="Enter Your First Name"
                                                value={values.firstName}
                                            />
                                            <ErrorMessage
                                                name="firstName"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                        <label htmlFor="firstName">Last Name</label>
                                        <div>
                                            <Field
                                                id="lastName"
                                                name="lastName"
                                                placeholder="Enter Your Last Name"
                                                value={values.lastName}
                                            />
                                            <ErrorMessage
                                                name="lastName"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="row ">
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                        <label htmlFor="firstName">Email</label>
                                        <div>
                                            <Field
                                                id="email"
                                                name="email"
                                                placeholder="Enter Your email"
                                                value={values.email}
                                            />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                        <label htmlFor="firstName">Phone no.</label>
                                        <div>
                                            <Field
                                                id="number"
                                                type="number"
                                                name="contactNo"
                                                placeholder="Enter your contact number"
                                                value={values.contactNo}
                                            />
                                            <ErrorMessage
                                                name="contactNo"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                        <label htmlFor="firstName">Pasword</label>
                                        <div>
                                            <Field
                                                id="password"
                                                name="password"
                                                placeholder="Enter Your Password"
                                                type="password"
                                                value={values.password}
                                            />
                                            <ErrorMessage
                                                name="password"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="row ">
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                        <label htmlFor="firstName">Role</label>
                                        <div>
                                            <ReactSelect
                                                name={"role"}
                                                id={"role"}
                                                placeHolder={"role"}
                                                options={rolesOption}
                                                value={values.role}
                                                onChange={(e: any) => setFieldValue("role", e.value)}
                                            />
                                            <ErrorMessage
                                                name="role"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                        <label htmlFor="firstName">Allowed Module</label>
                                        <div>
                                            <ReactSelect
                                                name={"allowedModule"}
                                                id={"module"}
                                                placeHolder={"Allowed module"}
                                                value={values.allowedModule}
                                                options={tabOptions}
                                                onChange={(e: any) =>
                                                    setFieldValue("allowedModule", e.value)
                                                }
                                                className="w-100"
                                            />
                                            <ErrorMessage
                                                name="allowedModule"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-4">
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default CreateSuperUser