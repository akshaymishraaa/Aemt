import { ErrorMessage, Field } from 'formik'
import React, { useState } from 'react'
import DatePick from '../../../../common/Datepicker/Datepicker'
import moment from 'moment'
import dayjs from 'dayjs'
const StudentPersonalDetails = (props: any) => {
    const { values, setFieldValue } = props
    const [gender, setGender] = useState<string>('')

    const HandleGenderChange = (e: any, setFieldValue: any) => {
        if (e.target.checked) {
            setGender(e.target.value)
            setFieldValue('studentInfo.gender', e.target.value)
        }
    }
    return (
        <>
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
                    <div className='field date_field'>

                        <label htmlFor='studentInfo.dateOfBirth' className='form-label'> Birth Date<span className={'text-danger'}>*</span> :  </label>
                        <DatePick
                            value={(values.studentInfo.dateOfBirth !== '') ? dayjs(values.studentInfo.dateOfBirth) : null}
                            onChange={(e: any) => {
                                const date = moment(e.$d).format('DD-MM-YYYY')
                                setFieldValue("studentInfo.dateOfBirth", date)
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
                            value={(values.studentInfo.dateOfAdmission) ? dayjs(values.studentInfo.dateOfAdmission) : null}
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
        </>
    )
}
export default StudentPersonalDetails