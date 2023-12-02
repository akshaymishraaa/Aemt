import React, { useState } from 'react'
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { useSelector } from 'react-redux';
import { CustomCom } from '../../constants/addStudent/CustomComponents';
import '../../styles/AdmissionStyles.scss'
import { validateAdmissionForm } from '../../constants/addStudent/validationSchema';
import StudentPersonalDetails from './PersonalDeatils';
import ParentsDetails from './ParentsDetails';
import PreviousAcademicDetails from './PreviousEducationDetails';
import { NavLink, useNavigate } from 'react-router-dom';
import FormsStepper from './FormsStepper';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OthersDetails from './OtherDeatails';
const AddEditNewStudentDetails = (props: any) => {
    const navigate = useNavigate()
    const [activeStep, setActiveStep] = useState<any>({ name: 'studentInfo', stepNo: 0, submited: false })
    const { studenAdmissiontData, formsSubmisionSteps } = useSelector((state: any) => state.studentsModule)
    const renderFetchForms = (values: any, setFieldValue: any) => {
        switch (activeStep.name) {
            case 'studentInfo':
                return (
                    <>
                        <StudentPersonalDetails values={values} setFieldValue={setFieldValue} activeStep={activeStep} />
                    </>
                )
            case 'parentsInfo':
                return (
                    <>
                        <ParentsDetails values={values} setFieldValue={setFieldValue} activeStep={activeStep} />
                    </>
                )
            case 'previousAcademicDetails':
                return (
                    <>
                        <PreviousAcademicDetails values={values} setFieldValue={setFieldValue} />
                    </>
                )
            case 'others':
                return (
                    <>
                        <OthersDetails values={values} setFieldValue={setFieldValue} />
                    </>
                )
            default:
                return (
                    <><span></span></>
                )
        }
    }

    const onSubmitHandler=(values:any)=>{
        let payload ={...activeStep,submited : true}

        setActiveStep(payload)
        if (activeStep.stepNo !== (formsSubmisionSteps?.length - 1)){

        }
    }
    return (
        <>
            <Formik
                initialValues={studenAdmissiontData}
                onSubmit={(values: any) => {
                    // onSubmitHandler(values)
                }}
                validationSchema={validateAdmissionForm}

            >
                {({ errors, touched, setFieldValue, values, }) => {
                    return (
                        <Form className='admissionForm'>
                            <div className='formHeading'> Student Admission Form</div>
                            <FormsStepper activeStep={activeStep} setActiveStep={setActiveStep} errors={errors} formsSteps={formsSubmisionSteps} />
                            <div className='w-100 justify-content-end'>
                                <div className="studentTypeDef d-flex  ">
                                    <NavLink to='./' className='d-flex justify-content-end navlink mx-3'>
                                        <ArrowBackIcon
                                        />
                                        Go back</NavLink>
                                    <label htmlFor='others.studentType'> Admission Type</label>
                                    <div>

                                        <label > <Field
                                            type="radio"
                                            name="others.studentType"
                                            value="NEW"
                                            checked={(values.others.studentType === 'NEW') ? true : false}
                                        />New </label>
                                        <label ><Field
                                            type="radio"
                                            name="others.studentType"
                                            value="OLD"
                                            checked={(values.others.studentType === 'OLD') ? true : false}
                                        />Old </label>
                                    </div>


                                </div>
                            </div>
                            <div className='SectionsContainer'>
                                {renderFetchForms(values, setFieldValue)}
                                <div className='submissonContainer'>

                                    <button type='submit' onClick={(e:any)=>{onSubmitHandler(values)}} className='btn btn-primary' > {(activeStep.stepNo !== (formsSubmisionSteps?.length - 1)) ? 'Next' : 'Submit Admission'}</button>
                                    <button type='button' className='btn btn-secondary' onClick={(e: any) => { navigate('/students') }}> Cancel</button>
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