import React, { useState } from 'react'
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { useSelector } from 'react-redux';
import { CustomCom } from '../../constants/addStudent/CustomComponents';
import '../../styles/AdmissionStyles.scss'
import DatePick from '../../../../common/Datepicker/Datepicker';
import moment from 'moment';
import dayjs from 'dayjs';
import { validateAdmissionForm } from '../../constants/addStudent/validationSchema';
import StudentPersonalDetails from './PersonalDeatils';
import ParentsDetails from './ParentsDetails';
import PreviousAcademicDetails from './PreviousEducationDetails';
const AddEditNewStudentDetails = (props: any) => {
    const { studenAdmissiontData } = useSelector((state: any) => state.studentsModule)
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
                                <StudentPersonalDetails
                                    values={values}
                                    setFieldValue={setFieldValue}
                                />
                                <ParentsDetails
                                    values={values}
                                    setFieldValue={setFieldValue}
                                />
                                <PreviousAcademicDetails
                                    values={values}
                                    setFieldValue={setFieldValue}
                                />
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