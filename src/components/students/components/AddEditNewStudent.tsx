import React, { useState } from 'react'
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { useSelector } from 'react-redux';
import { CustomCom } from '../constants/addStudent/CustomComponents';
import '../styles/AdmissionStyles.scss'
import DatePick from '../../../common/Datepicker/Datepicker';
import moment from 'moment';
import dayjs from 'dayjs';
import { validateAdmissionForm } from '../constants/addStudent/validationSchema';
const AddEditNewStudentDetails = (props: any) => {
    const { studenAdmissiontData } = useSelector((state: any) => state.studentsModule)
    const [gender, setGender] = useState<string>('')
    // const Div = styled.div({
    //     color: "#ffffff",
    //     background: '#f5b40d',

    // })
    const HandleGenderChange = (e: any, setFieldValue: any) => {
        if (e.target.checked) {
            setGender(e.target.value)
            setFieldValue('studentInfo.gender', e.target.value)
        }
    }
    return (
        <>
            <Formik
                initialValues={studenAdmissiontData}
                onSubmit={(values: any) => {
                    console.log(values, "28....")
                }}
                validationSchema={validateAdmissionForm}

            >
                {({ errors, touched, setFieldValue, values, }) => {
                    return (
                        <Form className='admissionForm'>
                            <>{console.log(values, errors, "admision25...")}</>
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
                                            <div className='text-danger error'><ErrorMessage name={'studentInfo.adharNumber'} /></div>


                                        </div>
                                        <div className='field'>

                                            <label htmlFor='studentInfo.emailId' className='form-label'>Personal Mail Id :  </label>
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

                                            <label htmlFor='studentInfo.contactNumber' className='form-label'> contactNumber :  </label>
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

                                            <label htmlFor='studentInfo.dateOfBirth' className='form-label'> Birth Date<span className={'text-danger'}>*</span> :  </label>
                                            <DatePick
                                                value={dayjs(values.studentInfo.dateOfBirth)}
                                                onChange={(e: any) => {
                                                    const date = moment(e.$d).format('DD-MM-YYYY')
                                                    setFieldValue("studentInfo.dateOfBirth", date)
                                                }}
                                                placeholder={"Date Of Birth"}
                                            // styles={customDateStyles}

                                            />
                                            <div className='text-danger error'><ErrorMessage name={'studentInfo.dateOfBirth'} /></div>

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='studentInfo.dateOfAdmission' className='form-label'> Joining Date<span className={'text-danger'}>*</span> :  </label>
                                            <DatePick
                                                placeholder={"Date Of joining"}
                                                value={dayjs(values.studentInfo.dateOfAdmission)}
                                                onChange={(e: any) => {
                                                    const date = moment(e.$d).format('DD-MM-YYYY')
                                                    setFieldValue("studentInfo.dateOfAdmission", date)
                                                }}
                                            // styles={customDateStyles}
                                            />
                                            <div className='text-danger error'><ErrorMessage name={'studentInfo.dateOfAdmission'} /></div>

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='studentInfo.gender' className='form-label'> Gender<span className={'text-danger'}>*</span> :  </label>
                                            <div className='radioContainer'>
                                                <label> <Field type={'radio'}
                                                    name={'studentInfo.gender'}
                                                    id={"studentInfo.gender"}
                                                    value={'male'}
                                                    checked={(gender === 'male') ? true : false}

                                                    onChange={(e: any) => {
                                                        HandleGenderChange(e, setFieldValue)
                                                    }
                                                    } /> <span> Male  </span></label>
                                                <label>
                                                    <Field type={'radio'}
                                                        name={'studentInfo.gender'}
                                                        id={"studentInfo.gender"}
                                                        value={'female'}
                                                        checked={(gender === 'female') ? true : false}
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
                                                        checked={(gender === 'others') ? true : false}
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
                                                value={values.studentInfo.categorgy}
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

                                            <label htmlFor='studentInfo. classJoining' className='form-label'> Class Of Admission<span className={'text-danger'}>*</span> :  </label>
                                            <Field
                                                as='select'
                                                name="studentInfo. classJoining"
                                                placeholder={"Class of Admission"}
                                                id="studentInfo. classJoining"
                                                value={values.studentInfo.classJoining}
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
                                    </div>
                                </div>
                                <div className='SectionContainer mt-3 mb-2'>
                                    <h6 className='SectionHeader'>Parents Information :</h6>
                                    <hr className='m-0' />
                                    <div className='fieldsContainer'>
                                        <div className='field'>

                                            <label htmlFor='parentsInfo.fatherName' className='form-label'> Father Full Name<span className={'text-danger'}>*</span> :  </label>
                                            <Field
                                                type={"text"}
                                                name="parentsInfo.fatherName"
                                                id="parentsInfo.fatherName"
                                                value={values.parentsInfo.fatherName}
                                                className={'form-control'}
                                                placeholder={"Father's Name "}
                                            >

                                            </Field>
                                            <div className='text-danger error'><ErrorMessage name={'parentsInfo.fatherName'} /></div>


                                        </div>
                                        <div className='field'>

                                            <label htmlFor='parentsInfo.fatherOccupation' className='form-label'> Father Occupation<span className={'text-danger'}>*</span> :  </label>
                                            <Field
                                                type="text"
                                                name="parentsInfo.fatherOccupation"
                                                id="parentsInfo.fatherOccupation"
                                                value={values.parentsInfo.fatherOccupation}
                                                className={'form-control'}
                                                placeholder={"Occupation"}
                                            >

                                            </Field>
                                            <div className='text-danger error'><ErrorMessage name={'parentsInfo.fatherOccupation'} /></div>


                                        </div>
                                        <div className='field'>

                                            <label htmlFor='parentsInfo.fatherHigherEducation' className='form-label'>Qualification<span className={'text-danger'}>*</span> :  </label>
                                            <Field
                                                type="text"
                                                name="parentsInfo.fatherHigherEducation"
                                                id="parentsInfo.fatherHigherEducation"
                                                placeholder={'Qualification '}
                                                value={values.parentsInfo.fatherHigherEducation}
                                                className={'form-control'}
                                            >

                                            </Field>
                                            <div className='text-danger error'><ErrorMessage name={'parentsInfo.fatherHigherEducation'} /></div>


                                        </div>
                                        <div className='field'>

                                            <label htmlFor='parentsInfo.motherName' className='form-label'>Mother Name<span className={'text-danger'}>*</span> :  </label>
                                            <Field
                                                type="text"
                                                name="parentsInfo.motherName"
                                                id="parentsInfo.motherName"
                                                placeholder={'Mother Full Name '}
                                                value={values.parentsInfo.motherName}
                                                className={'form-control'}
                                            />
                                            <div className='text-danger error'><ErrorMessage name={'parentsInfo.motherName'} /></div>

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='parentsInfo.motherOccupation' className='form-label'> Mother's Occupation<span className={'text-danger'}>*</span> :  </label>
                                            <Field
                                                type="text"
                                                name="parentsInfo.motherOccupation"
                                                id="parentsInfo.motherOccupation"
                                                value={values.parentsInfo.motherOccupation}
                                                className={'form-control'}
                                                placeholder={"Occupation"}
                                            />
                                            <div className='text-danger error'><ErrorMessage name={'parentsInfo.motherOccupation'} /></div>

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='parentsInfo.motherHigherEducation' className='form-label'>Qualification<span className={'text-danger'}>*</span>:  </label>
                                            <Field
                                                type="text"
                                                name="parentsInfo.motherHigherEducation"
                                                id="parentsInfo.motherHigherEducation"
                                                placeholder={'Qualification '}
                                                value={values.parentsInfo.motherHigherEducation}
                                                className={'form-control'}
                                            />
                                            <div className='text-danger error'><ErrorMessage name={'parentsInfo.motherHigherEducation'} /></div>

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='parentsInfo.localGurdian' className='form-label'>Local Gurdian:  </label>
                                            <Field
                                                type="text"
                                                name="parentsInfo.localGurdian"
                                                id="parentsInfo.localGurdian"
                                                placeholder={'Gurdian '}
                                                value={values.parentsInfo.localGurdian}
                                                className={'form-control'}
                                            />

                                        </div>
                                        <div className='field'>
                                            <label htmlFor='parentsInfo.gurdianContactNumber' className='form-label'>Gurdian Contact:  </label>
                                            <Field
                                                type="number"
                                                name="parentsInfo.gurdianContactNumber"
                                                id="parentsInfo.gurdianContactNumber"
                                                placeholder={'Gurdian Contact'}
                                                value={values.parentsInfo.gurdianContactNumber}
                                                className={'form-control'}
                                                onChange={((e: any) => {
                                                    if (e.target.value?.length > 10) {
                                                        e.preventDefault()
                                                    }
                                                    else {
                                                        setFieldValue("parentsInfo.gurdianContactNumber", e.target.value)
                                                    }
                                                })}
                                            />

                                        </div>
                                        <div className='field'>
                                            <label htmlFor='parentsInfo.primaryConactNumber' className='form-label'>Primary Contact<span className={'text-danger'}>*</span>:  </label>
                                            <Field
                                                type="number"
                                                name="parentsInfo.primaryConactNumber"
                                                id="parentsInfo.primaryConactNumber"
                                                placeholder={'Primary Contact'}
                                                value={values.parentsInfo.primaryConactNumber}
                                                className={'form-control'}
                                                onChange={((e: any) => {
                                                    if (e.target.value?.length > 10) {
                                                        e.preventDefault()
                                                    }
                                                    else {
                                                        setFieldValue("parentsInfo.primaryConactNumber", e.target.value)
                                                    }
                                                })}
                                            />
                                            <div className='text-danger error'><ErrorMessage name={'parentsInfo.primaryConactNumber'} /></div>

                                        </div>
                                        <div className='field'>
                                            <label htmlFor='parentsInfo.PermenantAddress' className='form-label'>Pemenant Address<span className={'text-danger'}>*</span> :  </label>
                                            <textarea
                                                name="parentsInfo.PermenantAddress"
                                                id="parentsInfo.PermenantAddress"
                                                placeholder={'Permenant Address'}
                                                value={values.parentsInfo.PermenantAddress}
                                                className={'form-control'}
                                                cols={5}


                                            />
                                            <div className='text-danger error'><ErrorMessage name={'parentsInfo.PermenantAddress'} /></div>

                                        </div>
                                        <div className='field'>
                                            <label htmlFor='parentsInfo.localAddress' className='form-label'>Local Address<span className={'text-danger'}>*</span> :  </label>
                                            <textarea
                                                name="parentsInfo.localAddress"
                                                id="parentsInfo.localAddress"
                                                placeholder={'local Address'}
                                                value={values.parentsInfo.localAddress}
                                                className={'form-control'}
                                                cols={5}
                                            />
                                            <div className='text-danger error'><ErrorMessage name={'parentsInfo.localAddress'} /></div>

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='parentsInfo.emailId' className='form-label'>Primary Mail Id<span className={'text-danger'}>*</span> :  </label>
                                            <Field
                                                type="email"
                                                name="parentsInfo.emailId"
                                                id="parentsInfo.emailId"
                                                placeholder={'Primary Mail'}
                                                value={values.parentsInfo.emailId}
                                                className={'form-control'}

                                            >

                                            </Field>

                                            <div className='text-danger error'><ErrorMessage name={'parentsInfo.emailId'} /></div>


                                        </div>
                                    </div>
                                </div>
                                <div className='SectionContainer mt-3 mb-2'>
                                    <h6 className='SectionHeader'>Previous Academic Details :</h6>
                                    <hr className='m-0' />
                                    <div className='fieldsContainer'>
                                        <div className='field'>

                                            <label htmlFor='previousAcademicDetails.lastClassDetails' className='form-label'> Last Class Completed:  </label>
                                            <Field
                                                type="text"
                                                name="previousAcademicDetails.lastClassDetails"
                                                id="previousAcademicDetails.lastClassDetails"
                                                value={values.previousAcademicDetails.lastClassDetails}
                                                className={'form-control'}
                                                placeholder={"Last Class Completed"}
                                            >
                                            </Field>

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='previousAcademicDetails.schoolName' className='form-label'> Previous School Name:  </label>
                                            <Field
                                                type="text"
                                                name="previousAcademicDetails.schoolName"
                                                id="previousAcademicDetails.schoolNamer"
                                                value={values.previousAcademicDetails.schoolName}
                                                className={'form-control'}
                                                placeholder={"School Name"}

                                            >

                                            </Field>

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='previousAcademicDetails.lastAcedamicPercentage' className='form-label'>Previous Academic Performance:  </label>
                                            <Field
                                                type="text"
                                                name="previousAcademicDetails.lastAcedamicPercentage"
                                                id="previousAcademicDetails.lastAcedamicPercentage"
                                                placeholder={'Personal Mail'}
                                                value={values.previousAcademicDetails.lastAcedamicPercentage}
                                                className={'form-control'}
                                            >

                                            </Field>

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='previousAcademicDetails.transferCertificate' className='form-label'> Transfer Certificate:  </label>
                                            <input
                                                type={'file'}
                                                name="previousAcademicDetails.transferCertificate"
                                                placeholder={"Upload Tc"}
                                                id="previousAcademicDetails.transferCertificate"
                                                value={values.previousAcademicDetails.transferCertificate}

                                                className={'form-control'}
                                            />

                                            {/* </Field> */}

                                        </div>
                                    </div>
                                </div>
                                <div className='SectionContainer mt-3'>
                                    <h6 className='SectionHeader'> Others:</h6>
                                    <hr className='m-0' />
                                    <div className='fieldsContainer pb-3'>
                                        <div className='field'>
                                            <label htmlFor='others.transportationMode' className='form-label'> Transportation Mode<span className={'text-danger'}>*</span> :  </label>
                                            <div className='radioContainer'>
                                                <label> <Field type={'radio'}
                                                    name={'others.transportationMode'}
                                                    id={"others.transportationMode"}
                                                    value={'self-Transport'}
                                                    checked={(values?.others?.transportationMode === 'self-Transport') ? true : false}

                                                    onChange={(e: any) => {
                                                        setFieldValue('others.transportationMode', 'self-Transport')

                                                    }
                                                    } /> <span> Self Transportation </span></label>
                                                <label>
                                                    <Field type={'radio'}
                                                        name={'others.transportationMode'}
                                                        id={"others.transportationMode"}
                                                        value={'school-transport'}
                                                        checked={(values?.others?.transportationMode === 'school-transport') ? true : false}
                                                        onChange={(e: any) => {
                                                            setFieldValue('others.transportationMode', 'school-transport')
                                                        }}
                                                    />
                                                    <span> School Transportation </span></label>
                                            </div>
                                            <div className='text-danger error'><ErrorMessage name={'others.transportationMode'} /></div>

                                        </div>



                                    </div>
                                </div>
                                <button type='submit' className='btn btn-primary'> Submit</button>

                            </div>
                        </Form>

                    )
                }}

            </Formik >

        </>
    )
}
export default AddEditNewStudentDetails