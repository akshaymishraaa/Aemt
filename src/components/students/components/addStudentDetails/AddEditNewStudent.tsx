import React, { useEffect, useState } from 'react'
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { CustomCom } from '../../constants/addStudent/CustomComponents';
import '../../styles/AdmissionStyles.scss'
// import { validateAdmissionForm } from '../../constants/addStudent/validationSchema';
import StudentPersonalDetails from './PersonalDeatils';
import ParentsDetails from './ParentsDetails';
import PreviousAcademicDetails from './PreviousEducationDetails';
import { NavLink, useNavigate } from 'react-router-dom';
import FormsStepper from './FormsStepper';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OthersDetails from './OtherDeatails';
import { studentTypes } from '../../reducer/types';
import { Actiontypes } from '../../../../types/ActionTypes';
const AddEditNewStudentDetails = (props: any) => {
    const navigate = useNavigate()
    const { studenAdmissiontData, formsSubmisionSteps } = useSelector((state: any) => state.studentsModule)
    const [activeStep, setActiveStep] = useState<any>({})
    const dispatch = useDispatch()
    const renderFetchForms = (values: any, setFieldValue: any, touched: any) => {
        switch (activeStep?.name) {
            case 'studentInfo':
                return (
                    <>
                        <StudentPersonalDetails values={values} setFieldValue={setFieldValue} activeStep={activeStep} touched={touched} />
                    </>
                )
            case 'parentsInfo':
                return (
                    <>
                        <ParentsDetails values={values} setFieldValue={setFieldValue} activeStep={activeStep} touched={touched} />
                    </>
                )
            case 'previousAcademicDetails':
                return (
                    <>
                        <PreviousAcademicDetails values={values} setFieldValue={setFieldValue} touched={touched} />
                    </>
                )
            case 'others':
                return (
                    <>
                        <OthersDetails values={values} setFieldValue={setFieldValue} touched={touched} />
                    </>
                )
            default:
                return (
                    <><span></span></>
                )
        }
    }
    useEffect(() => {
        let payload = formsSubmisionSteps?.map((item: any, index: number) => {
            // if (item.submited) {
            // alert()
            item.submited = null
            // }
            return item
        })
        console.log(payload, "60....payload")
        dispatch({ type: studentTypes.ADMISSION_STEPS, payload: payload })
        setActiveStep(formsSubmisionSteps[0])


    }, [])

    const onSubmitHandler = (values: any, item: any) => {
        let current_Tab = { ...activeStep, submited: true }

        if (activeStep.stepNo < (formsSubmisionSteps?.length - 1)) {
            // this is to execute to move the form to next step 

            setActiveStep(item)
        }
        else {
            // this is final step to submit values to api 

        }
        let payload = [...formsSubmisionSteps]
        payload[activeStep?.stepNo] = { ...current_Tab }
        dispatch({ type: studentTypes.ADMISSION_STEPS, payload: payload })
    }
    const handleCanclePre = (e: any) => {
        if (activeStep?.stepNo === 0) {
            { navigate('/students') }
        }
        else {
            let previous_tab = formsSubmisionSteps[(activeStep?.stepNo - 1)]
            setActiveStep(previous_tab)
        }
    }
    const intiateSubmitHandler = (touched: any, errors: any, values: any, item: any) => {
        console.log("errors", touched, errors, item)
        if (Object.keys(errors)?.length === 0 && Object.keys(touched)?.length > 0) {
            let next_tab = {}
            if (item) {
                next_tab = { ...item }
            }
            else {

                next_tab = { ...formsSubmisionSteps[(activeStep?.stepNo + 1)] }
            }
            onSubmitHandler(values, next_tab)
        }
        else {
            let payload = [...formsSubmisionSteps]
            payload[activeStep?.stepNo] = { ...activeStep, submited: false }
            dispatch({ type: studentTypes.ADMISSION_STEPS, payload: payload })
            dispatch({
                type: Actiontypes.TOAST_ENALBLED, payload: {
                    summary: 'Error',
                    detail: 'Please Fill All Mandatory Fields Of Current Step To Move Forward ',
                    severity: 'error',
                    show: true
                }
            })
        }
        delete touched.parentsInfo
        delete touched.studentInfo
        delete touched.others
        delete touched.previousAcademicDetails
        console.log(touched, "touched")
        

    }
    return (
        <>
            <Formik
                initialValues={studenAdmissiontData}
                onSubmit={(values: any) => {
                    // onSubmitHandler(values)
                }}
                validationSchema={(activeStep?.validate)}
            >
                {({ errors, touched, setFieldValue, values, isSubmitting }) => {
                    return (
                        <Form className='admissionForm'>
                            <>{console.log(touched, "128...touched")}</>
                            <div className='formHeading'> Student Admission Form</div>
                            <FormsStepper activeStep={activeStep} setActiveStep={setActiveStep} errors={errors} formsSteps={formsSubmisionSteps} values={values} touched={touched} intiateSubmitHandler={intiateSubmitHandler} />
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
                                {renderFetchForms(values, setFieldValue, touched)}
                                <div className='submissonContainer'>
                                    <button type='button' className='btn btn-secondary' onClick={(e: any) => { handleCanclePre(e) }}> {(activeStep?.stepNo === 0) ? 'Cancel' : 'Previous'}</button>
                                    <button type='submit' className='btn btn-primary' onClick={(e: any) => { intiateSubmitHandler(touched, errors, values, null) }} > {(activeStep?.stepNo !== (formsSubmisionSteps?.length - 1)) ? 'Next' : 'Submit Admission'}</button>
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