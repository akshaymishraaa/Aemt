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
import CommonCard from '../../common/CommonCard';


function CreateSuperUser() {
    const [error, setError] = React.useState(false);
    const { tabs, recentOrganizationName } = useSelector((state: any) => state.application);
    const dispatch = useDispatch();

    const tabOptions = recentOrganizationName.modules
    // ?.map((item: any, index: any) => {
    //     let optionObject = { label: "", value: "" };
    //     optionObject.label = item.name;
    //     optionObject.value = item.name;

    //     return optionObject;
    // });
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
        <div className="container-fluid d-flex justify-content-center mt-5" >
             <CommonCard  title={'Create super user for access application'}>
            {/* <div className="border border-1 p-5" > */}
                {/* <h3>Create super user for access application</h3> */}
                {/* <hr /> */}
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
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <label htmlFor="firstName">Organization Name:<span className="text-danger">*</span></label>
                                        <div>
                                            <Field
                                                id="orgName"
                                                name="orgName"
                                                value={values.orgName}
                                                disabled
                                                className="form-control form-control-md text-field"
                                            />
                                            <ErrorMessage
                                                name="orgName"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <label htmlFor="firstName">First Name:<span className="text-danger">*</span></label>
                                        <div>
                                            <Field
                                                id="firstName"
                                                name="firstName"
                                                placeholder="Enter Your First Name"
                                                value={values.firstName}
                                                className="form-control form-control-md text-field"
                                            />
                                            <ErrorMessage
                                                name="firstName"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <label htmlFor="firstName">Last Name:</label>
                                        <div>
                                            <Field
                                                id="lastName"
                                                name="lastName"
                                                placeholder="Enter Your Last Name"
                                                value={values.lastName}
                                                className="form-control form-control-md text-field"
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
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <label htmlFor="firstName">Email:<span className="text-danger">*</span></label>
                                        <div>
                                            <Field
                                                id="email"
                                                name="email"
                                                placeholder="Enter Your email"
                                                value={values.email}
                                                className="form-control form-control-md text-field"
                                            />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <label htmlFor="firstName">Phone no:<span className="text-danger">*</span></label>
                                        <div>
                                            <Field
                                                id="number"
                                                type="number"
                                                name="contactNo"
                                                placeholder="Enter your contact number"
                                                value={values.contactNo}
                                                className="form-control form-control-md text-field"
                                            />
                                            <ErrorMessage
                                                name="contactNo"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <label htmlFor="firstName">Pasword:<span className="text-danger">*</span></label>
                                        <div>
                                            <Field
                                                id="password"
                                                name="password"
                                                placeholder="Enter Your Password"
                                                type="password"
                                                value={values.password}
                                                className="form-control form-control-md text-field"
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
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <label htmlFor="firstName">Role:<span className="text-danger">*</span></label>
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
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <label htmlFor="firstName">Allowed Module:<span className="text-danger">*</span></label>
                                        <div>
                                            <ReactSelect
                                                type="multi"
                                                name={"allowedModule"}
                                                id={"module"}
                                                placeHolder={"Allowed module"}
                                                value={values.allowedModule}
                                                options={tabOptions}
                                                onChange={(e: any) => {
                                                    console.log('e.value', e)
                                                    setFieldValue("allowedModule", e)
                                                }
                                                }
                                                className="w-100"
                                                isMulti={true}
                                                defaultValue={recentOrganizationName.modules.filter((item: any) => item.status && item)}
                                            />
                                            <>
                                                {console.log('228...', recentOrganizationName.modules.filter((item: any) => item.status && item))}
                                            </>
                                            <ErrorMessage
                                                name="allowedModule"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mt-4">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            {/* </div> */}
            </CommonCard>
        </div>
    )
}

export default CreateSuperUser