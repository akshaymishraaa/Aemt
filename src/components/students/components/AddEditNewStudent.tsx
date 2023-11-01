import React, { useState } from 'react'
import { Field, Formik, Form } from 'formik';
import { useSelector } from 'react-redux';
import { CustomCom } from '../constants/addStudent/CustomComponents';
import '../styles/AdmissionStyles.scss'
import DatePick from '../../../common/Datepicker/Datepicker';
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

                                            <label htmlFor='studentInfo.dateOfBirth' className='form-label'> Birth Date:  </label>
                                            <DatePick
                                                value={values.studentInfo.dateOfBirth}
                                                onChange={(e: any) => {
                                                    console.log(e.$d)
                                                }}
                                                placeholder={"Date Of Birth"}


                                            />
                                        </div>
                                        <div className='field'>

                                            <label htmlFor='studentInfo.dateOfBirth' className='form-label'> Joining Date:  </label>
                                            <DatePick
                                                placeholder={"Date Of joining"}
                                            />
                                        </div>
                                        <div className='field'>

                                            <label htmlFor='studentInfo.gender' className='form-label'> Gender:  </label>
                                            <div className='checkboxes'>
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
                                        </div>
                                        <div className='field'>

                                            <label htmlFor='studentInfo.categorgy' className='form-label'> Category:  </label>
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

                                        </div>
                                        <div className='field'>

                                            <label htmlFor='studentInfo. classJoining' className='form-label'> Class Of Admission:  </label>
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

                                            <label htmlFor='parentsInfo.motherName' className='form-label'>Mother Name:  </label>
                                            <Field
                                                type="text"
                                                name="parentsInfo.motherName"
                                                id="parentsInfo.motherName"
                                                placeholder={'Mother Full Name '}
                                                value={values.parentsInfo.motherName}
                                                className={'form-control'}
                                            />
                                        </div>
                                        <div className='field'>

                                            <label htmlFor='parentsInfo.motherOccupation' className='form-label'> Mother's Occupation:  </label>
                                            <Field
                                                type="text"
                                                name="parentsInfo.motherOccupation"
                                                id="parentsInfo.motherOccupation"
                                                value={values.parentsInfo.motherOccupation}
                                                className={'form-control'}
                                                placeholder={"Occupation"}
                                            />
                                        </div>
                                        <div className='field'>

                                            <label htmlFor='parentsInfo.motherHigherEducation' className='form-label'>Qualification:  </label>
                                            <Field
                                                type="text"
                                                name="parentsInfo.motherHigherEducation"
                                                id="parentsInfo.motherHigherEducation"
                                                placeholder={'Qualification '}
                                                value={values.parentsInfo.motherHigherEducation}
                                                className={'form-control'}
                                            />
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
                                                        setFieldValue("studentInfo.gurdianContactNumber", e.target.value)
                                                    }
                                                })}
                                            />
                                        </div>
                                        <div className='field'>
                                            <label htmlFor='parentsInfo.primaryConactNumber' className='form-label'>Primary Contact:  </label>
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
                                                        setFieldValue("studentInfo.primaryConactNumber", e.target.value)
                                                    }
                                                })}
                                            />
                                        </div>
                                        <div className='field'>
                                            <label htmlFor='parentsInfo.PermenantAddress' className='form-label'>Pemenant Address:  </label>
                                            <textarea
                                                name="parentsInfo.PermenantAddress"
                                                id="parentsInfo.PermenantAddress"
                                                placeholder={'Permenant Address'}
                                                value={values.parentsInfo.PermenantAddress}
                                                className={'form-control'}
                                                cols={5}


                                            />
                                        </div>
                                        <div className='field'>
                                            <label htmlFor='parentsInfo.localAddress' className='form-label'>Local Address:  </label>
                                            <textarea
                                                name="parentsInfo.localAddress"
                                                id="parentsInfo.localAddress"
                                                placeholder={'local Address'}
                                                value={values.parentsInfo.localAddress}
                                                className={'form-control'}
                                                cols={5}
                                            />
                                        </div>
                                        <div className='field'>

                                            <label htmlFor='parentsInfo.emailId' className='form-label'>Primary Mail Id:  </label>
                                            <Field
                                                type="email"
                                                name="parentsInfo.emailId"
                                                id="parentsInfo.emailId"
                                                placeholder={'Primary Mail'}
                                                value={values.parentsInfo.emailId}
                                                className={'form-control'}

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