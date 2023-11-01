import { Field, Formik, Form } from 'formik';
import React from 'react'
import { useSelector } from 'react-redux';
import { CustomCom } from '../constants/addStudent/CustomComponents';
import '../styles/AdmissionStyles.scss'
import DatePick from '../../../common/Datepicker/Datepicker';
const AddEditNewStudentDetails = (props: any) => {
    const { studenAdmissiontData } = useSelector((state: any) => state.studentsModule)
    // const Div = styled.div({
    //     color: "#ffffff",
    //     background: '#f5b40d',

    // })
    return (
        <>
            <Formik
                initialValues={studenAdmissiontData}
                onSubmit={(values: any) => {
                    console.log(values)
                }}

            >
                {({ errors, touched, setFieldValue, values, }) => {
                    return (
                        <Form className='admissionForm'>
                            <>{console.log(values, "admision25...")}</>
                            {/* <CustomCom.fieldsDiv>
                                <h1>  h111111111</h1>
                                <CustomCom.styledButton>Click here</CustomCom.styledButton>
                                
                            </CustomCom.fieldsDiv> */}
                            <div className='formHeading'> Student Admission Form</div>
                            <div className='SectionsContainer'>

                                <div className='SectionContainer'>
                                    <h6 className='SectionHeader'>Student Info :</h6>
                                    <hr className='m-0' />
                                    <div className='fieldsContainer'>
                                        <div className='field'>

                                            <label htmlFor='studentInfo.studentFullName' className='form-label'> Student FullName:  </label>
                                            <Field
                                                type="text"
                                                name="studentInfo.studentFullName"
                                                id="studentInfo.studentFullName"
                                                value={values?.studentInfo?.studentFullName}
                                                className={'form-control'}
                                                placeholder={"Full Name"}

                                            />

                                        </div>
                                        <div className='field'>
                                            <label htmlFor='studentInfo.adharNumber' className='form-label'> Aadhar Number:  </label>
                                            <Field
                                                type="number"
                                                name="studentInfo.adharNumber"
                                                id="studentInfo.adharNumber"
                                                value={values.studentInfo.adharNumber}
                                                className={'form-control'}
                                                placeholder={"Aadhar Number"}
                                                onChange={((e: any) => {
                                                    if (e.target.value?.length > 12) {
                                                        e.preventDefault()
                                                    }
                                                    else {
                                                        setFieldValue("studentInfo.adharNumber", e.target.value)
                                                    }
                                                })}
                                            >

                                            </Field>

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='studentInfo.emailId' className='form-label'>Personal Mail Id:  </label>
                                            <Field
                                                type="email"
                                                name="studentInfo.emailId"
                                                id="studentInfo.emailId"
                                                placeholder={'Personal Mail'}
                                                value={values.studentInfo.emailId}
                                                className={'form-control'}

                                            >

                                            </Field>

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='studentInfo.contactNumber' className='form-label'> contactNumber:  </label>
                                            <Field
                                                type="number"
                                                name="studentInfo.contactNumber"
                                                placeholder={"Contact Number"}
                                                id="studentInfo.contactNumber"
                                                value={values.studentInfo.contactNumber}
                                                className={'form-control'}
                                                onChange={((e: any) => {
                                                    if (e.target.value?.length > 10) {
                                                        e.preventDefault()
                                                    }
                                                    else {
                                                        setFieldValue("studentInfo.contactNumber", e.target.value)
                                                    }
                                                })}

                                            >

                                            </Field>

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='studentInfo.dateOfBirth' className='form-label'> DOB:  </label>
                                            <DatePick
                                                value={values.studentInfo.dateOfBirth}
                                                onChange={(e: any) => {
                                                    console.log(e.$d)
                                                }}
                                                placeholder={"Date Of Birth"}

                                            />
                                        </div>
                                        <div className='field'>

                                            <label htmlFor='studentInfo.dateOfBirth' className='form-label'> DOB:  </label>
                                            <DatePick

                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='SectionContainer mt-3'>
                                    <h6 className='SectionHeader'>Parents Information :</h6>
                                    <hr className='m-0' />
                                    <div className='fieldsContainer'>
                                        <div className='field'>

                                            <label htmlFor='parentsInfo.fatherName' className='form-label'> Father Full Name:  </label>
                                            <Field
                                                type={"text"}
                                                name="parentsInfo.fatherName"
                                                id="parentsInfo.fatherName"
                                                value={values.parentsInfo.fatherName}
                                                className={'form-control'}
                                                placeholder={"Father's Name "}
                                            >

                                            </Field>

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='parentsInfo.fatherOccupation' className='form-label'> Father Occupation:  </label>
                                            <Field
                                                type="text"
                                                name="parentsInfo.fatherOccupation"
                                                id="parentsInfo.fatherOccupation"
                                                value={values.parentsInfo.fatherOccupation}
                                                className={'form-control'}
                                                placeholder={"Occupation"}
                                            >

                                            </Field>

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='parentsInfo.fatherHigherEducation' className='form-label'>Qualification:  </label>
                                            <Field
                                                type="text"
                                                name="parentsInfo.fatherHigherEducation"
                                                id="parentsInfo.fatherHigherEducation"
                                                placeholder={'Qualification '}
                                                value={values.parentsInfo.fatherHigherEducation}
                                                className={'form-control'}
                                            >

                                            </Field>

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='studentInfo.contactNumber' className='form-label'> contactNumber:  </label>
                                            <Field
                                                type="number"
                                                name="studentInfo.contactNumber"
                                                placeholder={"Contact Number"}
                                                id="studentInfo.contactNumber"
                                                value={values.studentInfo.contactNumber}
                                                className={'form-control'}
                                                maxLength={12}
                                            >

                                            </Field>

                                        </div>
                                    </div>
                                </div>
                                <div className='SectionContainer mt-3 mb-2'>
                                    <h6 className='SectionHeader'>Previous Academic Details :</h6>
                                    <hr className='m-0' />
                                    <div className='fieldsContainer'>
                                        <div className='field'>

                                            <label htmlFor='studentInfo.studentFullName' className='form-label'> Student FullName:  </label>
                                            <Field
                                                type="text"
                                                name="studentInfo.studentFullName"
                                                id="studentInfo.studentFullName"
                                                value={values.studentInfo.studentFullName}
                                                className={'form-control'}
                                                placeholder={"Full Name"}
                                            >

                                            </Field>

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='studentInfo.adharNumber' className='form-label'> Aadhar Number:  </label>
                                            <Field
                                                type="number"
                                                name="studentInfo.adharNumber"
                                                id="studentInfo.adharNumber"
                                                value={values.studentInfo.adharNumber}
                                                className={'form-control'}
                                                placeholder={"Aadhar Number"}
                                                onChange={((e: any) => {
                                                    if (e.target.value?.length > 12) {
                                                        e.preventDefault()
                                                    }
                                                    else {
                                                        setFieldValue("studentInfo.adharNumber", e.target.value)
                                                    }
                                                })}
                                            >

                                            </Field>

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='studentInfo.emailId' className='form-label'>Personal Mail Id:  </label>
                                            <Field
                                                type="email"
                                                name="studentInfo.emailId"
                                                id="studentInfo.emailId"
                                                placeholder={'Personal Mail'}
                                                value={values.studentInfo.emailId}
                                                className={'form-control'}
                                            >

                                            </Field>

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='studentInfo.contactNumber' className='form-label'> contactNumber:  </label>
                                            <Field
                                                type="number"
                                                name="studentInfo.contactNumber"
                                                placeholder={"Contact Number"}
                                                id="studentInfo.contactNumber"
                                                value={values.studentInfo.contactNumber}
                                                className={'form-control'}
                                                maxLength={12}
                                            >

                                            </Field>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>

                    )
                }}

            </Formik >

        </>
    )
}
export default AddEditNewStudentDetails