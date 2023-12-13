import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import DatePick from '../../../../common/Datepicker/Datepicker'
import moment from 'moment'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import SubmisonDiv from './SubmissionContainer'
const StudentPersonalDetails = (props: any) => {
    const { DataValidation, activeStep, setActiveStep, dispatchFormVlaues, admissionData } = props
    const { studenAdmissiontData, formsSubmisionSteps } = useSelector((state: any) => state.studentsModule)


    const HandleGenderChange = (e: any, setFieldValue: any) => {
        if (e.target.checked) {
            setFieldValue('studentInfo.gender', e.target.value)
        }
    }



    return (
        <>
            <Formik
                initialValues={admissionData[0]}
                validationSchema={formsSubmisionSteps[0]?.validate}
                onSubmit={(valuez: any) => {

                }}
            >
                {({ errors, touched, setFieldValue, values, isValidating }) => {
                    return (
                        <Form onBlur={(e: any) => { dispatchFormVlaues(values) }}>
                            <div className='SectionContainer'>
                                <h6 className='SectionHeader'>Student Info :</h6>
                                <hr className='m-0' />
                                <div className='d-flex justify-content-end mx-5'>
                                    <label htmlFor='studentInfo.studentType' className='mx-1' > Admission Type</label>
                                    <div>

                                        <label className='mx-2' > <Field
                                            type="radio"
                                            name="studentInfo.studentType"
                                            value="NEW"
                                            checked={(values.studentInfo.studentType === 'NEW') ? true : false}
                                        />New </label>
                                        <label ><Field
                                            type="radio"
                                            name="studentInfo.studentType"
                                            value="OLD"
                                            checked={(values.studentInfo.studentType === 'OLD') ? true : false}
                                        />Old </label>
                                    </div>

                                </div>
                                <div className='fieldsContainer'>
                                    <div className='field'>

                                        <label htmlFor='studentInfo.studentFullName' className='form-label'> Student FullName<span className={'text-danger'}>*</span> : </label>
                                        <Field
                                            type="text"
                                            name="studentInfo.studentFullName"
                                            id="studentInfo.studentFullName"
                                            value={values?.studentInfo?.studentFullName}
                                            className={'form-control'}
                                            placeholder={"Full Name"}

                                        />
                                        <div className='text-danger error'><ErrorMessage name={'studentInfo.studentFullName'} /></div>

                                    </div>
                                    <div className='field'>
                                        <label htmlFor='studentInfo.adharNumber' className='form-label'> Aadhar Number<span className={'text-danger'}>*</span> :  </label>
                                        <Field
                                            type="number"
                                            name="studentInfo.adharNumber"
                                            id="studentInfo.adharNumber"
                                            value={values?.studentInfo?.adharNumber}
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
                                        <div className='text-danger error'><ErrorMessage name={'studentInfo.adharNumber'} /></div>


                                    </div>
                                    <div className='field'>

                                        <label htmlFor='studentInfo.emailId' className='form-label'>Personal Mail Id :  </label>
                                        <Field
                                            type="email"
                                            name="studentInfo.emailId"
                                            id="studentInfo.emailId"
                                            placeholder={'Personal Mail'}
                                            value={values?.studentInfo?.emailId}
                                            className={'form-control'}

                                        >

                                        </Field>


                                    </div>
                                    <div className='field'>

                                        <label htmlFor='studentInfo.contactNumber' className='form-label'> contactNumber :  </label>
                                        <Field
                                            type="number"
                                            name="studentInfo.contactNumber"
                                            placeholder={"Contact Number"}
                                            id="studentInfo.contactNumber"
                                            value={values?.studentInfo?.contactNumber}
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
                                    {/* <div className='field date_field'>

                        <label htmlFor='studentInfo.dateOfBirth' className='form-label'> Birth Date<span className={'text-danger'}>*</span> :  </label>
                        <DatePick
                            value={(values.studentInfo.dateOfBirth !== '') ? values.studentInfo.dateOfBirth : null}
                            onChange={(e: any) => {
                                setFieldValue("studentInfo.dateOfBirth", e.$d)
                            }}
                            placeholder={"Date Of Birth"}
                        // styles={customDateStyles}

                        />
                        <div className='text-danger error'><ErrorMessage name={'studentInfo.dateOfBirth'} /></div>
                    </div>
                    <div className='field date_field'>

                        <label htmlFor='studentInfo.dateOfAdmission' className='form-label'> Joining Date<span className={'text-danger'}>*</span> :  </label>
                        <DatePick
                            placeholder={"Date Of joining"}
                            value={(values.studentInfo.dateOfAdmission) ? values.studentInfo.dateOfAdmission : null}
                            onChange={(e: any) => {
                                setFieldValue("studentInfo.dateOfAdmission", e.$d)
                            }}
                        // styles={customDateStyles}
                        />
                        <div className='text-danger error'><ErrorMessage name={'studentInfo.dateOfAdmission'} /></div>

                    </div> */}
                                    <div className='field'>

                                        <label htmlFor='studentInfo.gender' className='form-label'> Gender<span className={'text-danger'}>*</span> :  </label>
                                        <div className='radioContainer'>
                                            <label> <Field type={'radio'}
                                                name={'studentInfo.gender'}
                                                id={"studentInfo.gender"}
                                                value={'male'}
                                                checked={(values?.studentInfo?.gender === 'male') ? true : false}
                                                onChange={(e: any) => {
                                                    HandleGenderChange(e, setFieldValue)
                                                }
                                                } /> <span> Male  </span></label>
                                            <label>
                                                <Field type={'radio'}
                                                    name={'studentInfo.gender'}
                                                    id={"studentInfo.gender"}
                                                    value={'female'}
                                                    checked={(values?.studentInfo?.gender === 'female') ? true : false}
                                                    onChange={(e: any) => {
                                                        HandleGenderChange(e, setFieldValue)
                                                    }}
                                                />

                                                <span> Female </span></label>
                                            <label>
                                                <Field
                                                    type={'radio'}
                                                    name={'studentInfo.gender'}
                                                    id={"studentInfo.gender"}
                                                    checked={(values?.studentInfo?.gender === 'others') ? true : false}
                                                    value={'others'}
                                                    onChange={(e: any) => {
                                                        HandleGenderChange(e, setFieldValue)
                                                    }}
                                                />
                                                <span> Others  </span></label>
                                        </div>
                                        <div className='text-danger error'><ErrorMessage name={'studentInfo.gender'} /></div>

                                    </div>
                                    <div className='field'>

                                        <label htmlFor='studentInfo.categorgy' className='form-label'> Category<span className={'text-danger'}>*</span> :  </label>
                                        <Field
                                            as='select'
                                            name="studentInfo.categorgy"
                                            placeholder={"Category"}
                                            id="studentInfo.categorgy"
                                            value={values?.studentInfo?.categorgy}
                                            className={'form-select'}
                                            onChange={((e: any) => {
                                                setFieldValue('studentInfo.categorgy', e.target.value)
                                            })}

                                        >
                                            <option value=''>Select Category</option>
                                            <option value="SC">S-C</option>
                                            <option value="ST">S-T</option>
                                            <option value="EBC">EBC</option>
                                            <option value="OBC">OBC</option>
                                            <option value="others">others</option>
                                        </Field>
                                        <div className='text-danger error'><ErrorMessage name={'studentInfo.categorgy'} /></div>


                                    </div>
                                    <div className='field'>

                                        <label htmlFor='studentInfo.classJoining' className='form-label'> Class Of Admission<span className={'text-danger'}>*</span> :  </label>
                                        <Field
                                            as='select'
                                            name="studentInfo.classJoining"
                                            placeholder={"Class of Admission"}
                                            id="studentInfo.classJoining"
                                            value={values?.studentInfo?.classJoining}
                                            className={'form-select'}
                                            onChange={((e: any) => {
                                                setFieldValue('studentInfo.classJoining', e.target.value)
                                            })}

                                        >
                                            <option value=''>Class of Admission </option>
                                            <option value="class-1">Class-1</option>
                                            <option value="class-2">Class-2</option>
                                            <option value="class-3">Class-3</option>
                                            <option value="class-4">Class-4</option>
                                            <option value="class-5">Class-5</option>
                                            <option value="class-6">Class-6</option>
                                            <option value="class-7">Class-7</option>
                                            <option value="class-8">Class-8</option>
                                            <option value="class-9">Class-9</option>
                                            <option value="class-10">Class-10</option>

                                        </Field>
                                        <div className='text-danger error'><ErrorMessage name={'studentInfo.classJoining'} /></div>


                                    </div>
                                    <div className='field'>

                                        <label htmlFor='studentInfo.bloodGroup' className='form-label'> Blood Group<span className={'text-danger'}>*</span> :  </label>
                                        <Field
                                            as='select'
                                            name="studentInfo.bloodGroup"
                                            placeholder={"Class of Admission"}
                                            id="studentInfo.bloodGroup"
                                            value={values?.studentInfo?.bloodGroup}
                                            className={'form-select'}
                                            onChange={((e: any) => {
                                                setFieldValue('studentInfo.bloodGroup', e.target.value)
                                            })}

                                        >
                                            <option value=''>Select BloodGroup </option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>

                                        </Field>
                                        <div className='text-danger error'><ErrorMessage name={'studentInfo.bloodGroup'} /></div>


                                    </div>
                                    <div className='field'>

                                        <label htmlFor='studentInfo.MotherTongue' className='form-label'>Mother Tongue<span className={'text-danger'}>*</span> : </label>
                                        <Field
                                            type="text"
                                            name="studentInfo.MotherTongue"
                                            id="studentInfo.MotherTongue"
                                            value={values?.studentInfo?.MotherTongue}
                                            className={'form-control'}
                                            placeholder={"Mother Tongue"}

                                        />
                                        <div className='text-danger error'><ErrorMessage name={'studentInfo.MotherTongue'} /></div>

                                    </div>
                                    <div className='field'>

                                        <label htmlFor='studentInfo.religion' className='form-label'>Religion<span className={'text-danger'}>*</span> : </label>
                                        <Field
                                            type="text"
                                            name="studentInfo.religion"
                                            id="studentInfo.religion"
                                            value={values?.studentInfo?.religion}
                                            className={'form-control'}
                                            placeholder={"Religion"}

                                        />
                                        <div className='text-danger error'><ErrorMessage name={'studentInfo.religion'} /></div>

                                    </div>
                                    <div className='field'>

                                        <label htmlFor='studentInfo.birthCertificate' className='form-label'> BirthCertificate:  </label>
                                        <input
                                            type={'file'}
                                            name="studentInfo.birthCertificate"
                                            placeholder={"Upload Birth Cerificate"}
                                            id="studentInfo.birthCertificate"
                                            value={values?.studentInfo?.birthCertificate}

                                            className={'form-control'}
                                        />
                                    </div>
                                    <div className='field'>

                                        <label htmlFor='studentInfo.studentProfile' className='form-label'> Student Profile:  </label>
                                        <input
                                            type={'file'}
                                            name="studentInfo.studentProfile"
                                            placeholder={"Upload Birth Cerificate"}
                                            id="studentInfo.studentProfile"
                                            value={values?.studentInfo?.studentProfile}

                                            className={'form-control'}
                                        />
                                    </div>
                                </div>
                                <SubmisonDiv values={values} errors={errors} touched={touched} DataValidation={DataValidation} activeStep={activeStep} isValidating={isValidating} setActiveStep={setActiveStep} />

                            </div>

                        </Form>
                    )
                }}

            </Formik>

        </>
    )
}
export default StudentPersonalDetails