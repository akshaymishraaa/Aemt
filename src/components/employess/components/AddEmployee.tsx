import React from 'react'
import CommonCard from '../../../common/CommonCard'
import { Formik, Field, Form, ErrorMessage } from "formik";
import { addEmployeeModel } from '../constants/AddEmployeeModel';
import { employeeValidationSchema } from '../constants/EmployeeValidationSchema';

function AddEmployee() {
    return (
        <CommonCard title='Add new employee'>
            <Formik
                initialValues={addEmployeeModel}
                validationSchema={employeeValidationSchema}
                onSubmit={() => console.log('')}
            >
                {
                    ({ errors, values }) => {
                        return <Form>
                            <div>
                                <h6>Personal details</h6>
                                <hr />
                                <div className='d-flex flex-wrap justify-content-between'>
                                    <div className='me-3'>
                                        <label htmlFor="firstName">Name:<span className="text-danger">*</span></label>
                                        <div>
                                            {/* <span> <LockResetIcon/></span> */}
                                            <Field
                                                id="name"
                                                name="name"
                                                placeholder="Enter name"
                                                value={values.personalDetails.name}
                                                // className={((touched?.password && errors.password) ? "inputerror" : "")}
                                                className="form-control form-control-md text-field"
                                            />
                                            <ErrorMessage
                                                name="name"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className='me-3'>
                                        <label htmlFor="firstName">Adhar number:<span className="text-danger">*</span></label>
                                        <div>
                                            {/* <span> <LockResetIcon/></span> */}
                                            <Field
                                                id="adharNo"
                                                name="adharNo"
                                                placeholder="Enter adhar number"
                                                value={values.personalDetails.adharNo}
                                                // className={((touched?.password && errors.password) ? "inputerror" : "")}
                                                className="form-control form-control-md text-field"
                                            />
                                            <ErrorMessage
                                                name="adharNo"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className='me-3'>

                                        <label htmlFor="panNo">Pan number:<span className="text-danger">*</span></label>
                                        <div>
                                            {/* <span> <LockResetIcon/></span> */}
                                            <Field
                                                id="panNo"
                                                name="panNo"
                                                placeholder="Enter pan number"
                                                value={values.personalDetails.panNo}
                                                // className={((touched?.password && errors.password) ? "inputerror" : "")}
                                                className="form-control form-control-md text-field"
                                            />
                                            <ErrorMessage
                                                name="panNo"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className='me-3'>
                                        <label htmlFor="email">Email Id:<span className="text-danger">*</span></label>
                                        <div>
                                            <Field
                                                id="email"
                                                name="email"
                                                placeholder="Enter email id"
                                                value={values.personalDetails.email}
                                                // className={((touched?.password && errors.password) ? "inputerror" : "")}
                                                className="form-control form-control-md text-field"
                                            />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className='me-3'>
                                        <label htmlFor="phoneNo">Phone number:<span className="text-danger">*</span></label>
                                        <div>
                                            {/* <span> <LockResetIcon/></span> */}
                                            <Field
                                                id="phone"
                                                name="phone"
                                                placeholder="Enter phone number"
                                                value={values.personalDetails.phone}
                                                // className={((touched?.password && errors.password) ? "inputerror" : "")}
                                                className="form-control form-control-md text-field"
                                            />
                                            <ErrorMessage
                                                name="phone"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className='me-3'>

                                        <label htmlFor="permanentAddress">Permanent Address:<span className="text-danger">*</span></label>
                                        <div>
                                            {/* <span> <LockResetIcon/></span> */}
                                            <Field
                                                id="permanentAddress"
                                                name="permanentAddress"
                                                placeholder="Enter permanent address"
                                                value={values.personalDetails.permanentAddress}
                                                // className={((touched?.password && errors.password) ? "inputerror" : "")}
                                                className="form-control form-control-md text-field"
                                            />
                                            <ErrorMessage
                                                name="permanentAddress"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className='me-3'>
                                        <label htmlFor="localAddress">Local Address:<span className="text-danger">*</span></label>
                                        <div>
                                            {/* <span> <LockResetIcon/></span> */}
                                            <Field
                                                id="localAddress"
                                                name="localAddress"
                                                placeholder="Enter local address"
                                                value={values.personalDetails.localAddress}
                                                // className={((touched?.password && errors.password) ? "inputerror" : "")}
                                                className="form-control form-control-md text-field"
                                            />
                                            <ErrorMessage
                                                name="localAddress"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className='me-3'>
                                        <label htmlFor="joiningData">Joining date:<span className="text-danger">*</span></label>
                                        <div>
                                            {/* <span> <LockResetIcon/></span> */}
                                            <Field
                                                id="joiningData"
                                                name="joiningData"
                                                placeholder="Enter joining date"
                                                value={values.personalDetails.joiningData}
                                                // className={((touched?.password && errors.password) ? "inputerror" : "")}
                                                className="form-control form-control-md text-field"
                                            />
                                            <ErrorMessage
                                                name="joiningData"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className='me-3'>
                                        <label htmlFor="employeementType">Employeement Type:<span className="text-danger">*</span></label>
                                        <div>
                                            {/* <span> <LockResetIcon/></span> */}
                                            <Field
                                                id="employeementType"
                                                name="employeementType"
                                                placeholder="Enter employeement type"
                                                value={values.personalDetails.employeementType}
                                                // className={((touched?.password && errors.password) ? "inputerror" : "")}
                                                className="form-control form-control-md text-field"
                                            />
                                            <ErrorMessage
                                                name="employeementType"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className='me-3'>
                                        <label htmlFor="department">Department:<span className="text-danger">*</span></label>
                                        <div>
                                            {/* <span> <LockResetIcon/></span> */}
                                            <Field
                                                id="department"
                                                name="department"
                                                placeholder="Enter department"
                                                value={values.personalDetails.department}
                                                // className={((touched?.password && errors.password) ? "inputerror" : "")}
                                                className="form-control form-control-md text-field"
                                            />
                                            <ErrorMessage
                                                name="department"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className='me-3'>
                                        <label htmlFor="firstName">Gender:<span className="text-danger">*</span></label>
                                        <div>
                                            {/* <span> <LockResetIcon/></span> */}
                                            <Field
                                                id="gender"
                                                name="gender"
                                                placeholder="Enter gender"
                                                value={values.personalDetails.gender}
                                                // className={((touched?.password && errors.password) ? "inputerror" : "")}
                                                className="form-control form-control-md text-field"
                                            />
                                            <ErrorMessage
                                                name="gender"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className='me-3'>
                                        <label htmlFor="firstName">Marital status:<span className="text-danger">*</span></label>
                                        <div>
                                            {/* <span> <LockResetIcon/></span> */}
                                            <Field
                                                id="maritalStatus"
                                                name="maritalStatus"
                                                placeholder="Enter marital status"
                                                value={values.personalDetails.maritalStatus}
                                                // className={((touched?.password && errors.password) ? "inputerror" : "")}
                                                className="form-control form-control-md text-field"
                                            />
                                            <ErrorMessage
                                                name="maritalStatus"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className='me-3'>
                                        <label htmlFor="firstName">Designation:<span className="text-danger">*</span></label>
                                        <div>
                                            {/* <span> <LockResetIcon/></span> */}
                                            <Field
                                                id="designation"
                                                name="designation"
                                                placeholder="Enter designation"
                                                value={values.personalDetails.designation}
                                                // className={((touched?.password && errors.password) ? "inputerror" : "")}
                                                className="form-control form-control-md text-field"
                                            />
                                            <ErrorMessage
                                                name="designation"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className='me-3'>
                                        <label htmlFor="firstName">Date of birth:<span className="text-danger">*</span></label>
                                        <div>
                                            {/* <span> <LockResetIcon/></span> */}
                                            <Field
                                                id="dateOfBirth"
                                                name="dateOfBirth"
                                                placeholder="Enter date of birth"
                                                value={values.personalDetails.dateOfBirth}
                                                // className={((touched?.password && errors.password) ? "inputerror" : "")}
                                                className="form-control form-control-md text-field"
                                            />
                                            <ErrorMessage
                                                name="gender"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <h6>Bank details</h6>
                                    <hr />
                                    <label htmlFor="firstName">Date of birth:<span className="text-danger">*</span></label>
                                    <div>
                                        {/* <span> <LockResetIcon/></span> */}
                                        <Field
                                            id="dateOfBirth"
                                            name="dateOfBirth"
                                            placeholder="Enter date of birth"
                                            value={values.personalDetails.dateOfBirth}
                                            // className={((touched?.password && errors.password) ? "inputerror" : "")}
                                            className="form-control form-control-md text-field"
                                        />
                                        <ErrorMessage
                                            name="gender"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div>
                                </div>
                            </div>

                        </Form>
                    }
                }
            </Formik>

        </CommonCard>
    )
}

export default AddEmployee