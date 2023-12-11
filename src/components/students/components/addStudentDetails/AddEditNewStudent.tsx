import React, { useEffect, useRef, useState } from 'react'
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
import { toastEnabled } from '../../../../actions/Action';
const AddEditNewStudentDetails = (props: any) => {
    const navigate = useNavigate()
    const { studenAdmissiontData, formsSubmisionSteps } = useSelector((state: any) => state.studentsModule)
    const [activeStep, setActiveStep] = useState<any>({})
    const current = useRef(false)
    const dispatch = useDispatch()


    const renderFetchForms = (DataValidation: any, activesStep: any,setActiveStep:any) => {
        switch (activeStep?.name) {
            case 'studentInfo':
                return (
                    <>
                        <StudentPersonalDetails DataValidation={DataValidation} activeStep={activeStep} setActiveStep={setActiveStep}/>
                    </>
                )
            case 'parentsInfo':
                return (
                    <>
                        <ParentsDetails DataValidation={DataValidation} activeStep={activeStep} setActiveStep={setActiveStep}/>
                    </>
                )
            case 'previousAcademicDetails':
                return (
                    <>
                        <PreviousAcademicDetails DataValidation={DataValidation} activeStep={activeStep} setActiveStep={setActiveStep} />
                    </>
                )
            case 'others':
                return (
                    <>
                        <OthersDetails DataValidation={DataValidation} activeStep={activeStep} setActiveStep={setActiveStep} />
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
    // this Method used to move next step if there is no issues in the current Step
    const DataValidation = (values: any, errors: any, touched: any) => {

        console.log("69.....", values, formsSubmisionSteps)
        if (Object.keys(touched)?.length !== 0) {
            if (Object.keys(errors)?.length === 0) {
                if (activeStep.stepNo < (formsSubmisionSteps?.length - 1)) {
                    let next_Step = formsSubmisionSteps[activeStep.stepNo + 1]
                    setActiveStep(next_Step)
                    formsSubmisionSteps[activeStep.stepNo] = { ...activeStep, submited: true }
                    let data = studenAdmissiontData[activeStep.stepNo][`${activeStep?.name}`] = values
                    let payload = studenAdmissiontData
                    payload[activeStep.stepNo] = data
                    dispatch({ type: studentTypes.ADMISSION_STEPS, payload: formsSubmisionSteps })
                    dispatch({ type: studentTypes.ADD_EDIT_STUDENT_ADMISSIONDETAILS, payload: payload })
                }
                else {
                    // let validateCompleteSubmission=false
                    if (!formsSubmisionSteps[activeStep.stepNo].submited) {
                        formsSubmisionSteps[activeStep.stepNo] = { ...activeStep, submited: true }
                        dispatch({ type: studentTypes.ADMISSION_STEPS, payload: formsSubmisionSteps })
                        let data = studenAdmissiontData[activeStep.stepNo][`${activeStep?.name}`] = values
                        let payload = studenAdmissiontData
                        payload[activeStep.stepNo] = data
                        dispatch({ type: studentTypes.ADD_EDIT_STUDENT_ADMISSIONDETAILS, payload: payload })
                        
                    }
                    let validateCompleteSubmission = formsSubmisionSteps?.filter((item: any) => item.submited !== true)
                    if (validateCompleteSubmission?.length ===0){
                        dispatch(toastEnabled({ summary: 'Admission Completed', detail: 'Student Enrolled success fully', severity: 'success', show: true }))
                    }
                    else{
                        dispatch(toastEnabled({ summary: 'Incomplete Steps', detail: 'Completed Every Step To Process Admission', severity: 'error', show: true }))


                    }

                    console.log("complete Submision", validateCompleteSubmission, activeStep)

                    // validateCompleteSubmission = formsSubmisionSteps?.every((item: any) => item.submitted === true)
                }

            }
            else {
                
                    formsSubmisionSteps[activeStep.stepNo] = { ...activeStep, submited: false }
                    // let data = studenAdmissiontData[activeStep.stepNo][`${activeStep?.name}`] = values
                    // let payload = studenAdmissiontData
                    // payload[activeStep.stepNo] = data
                    // dispatch({ type: studentTypes.ADD_EDIT_STUDENT_ADMISSIONDETAILS, payload: payload })
                    dispatch({ type: studentTypes.ADMISSION_STEPS, payload: formsSubmisionSteps })
                dispatch(toastEnabled({ summary: 'Error', detail: 'Please fill Madatory fields ToComplete the step', severity: 'error', show: true }))

            }

        }
        else {
            if (activeStep?.submited === null) {
                formsSubmisionSteps[activeStep.stepNo] = { ...activeStep, submited: false }
                dispatch({ type: studentTypes.ADMISSION_STEPS, payload: formsSubmisionSteps })
                dispatch(toastEnabled({ summary: 'Error', detail: 'Please fill Fields To Intiate Step Submission', severity: 'info', show: true }))
            }
            else if (activeStep?.submited === false) {
                dispatch(toastEnabled({ summary: 'Error', detail: 'Please fill Fields To Intiate Step Submission', severity: 'error', show: true }))
            }
            else {
                if(activeStep?.stepNo !== 3){
                    let next_Step = formsSubmisionSteps[activeStep.stepNo + 1]
                    setActiveStep(next_Step)
                }

            }
        }
    }

    return (
        <>

            <div className='admissionForm'>
                <div className='formHeading'> Student Admission Form</div>
                <FormsStepper activeStep={activeStep} setActiveStep={setActiveStep}/>
                <div className='w-100 justify-content-end'>
                    <div className="studentTypeDef d-flex  ">
                        <NavLink to='./' className='d-flex justify-content-end navlink mx-3'>
                            <ArrowBackIcon
                            />
                            Go back</NavLink>
                        <label htmlFor='others.studentType'> Admission Type</label>
                        {/* <div>

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
                                    </div> */}


                    </div>
                </div>
                <div className='SectionsContainer'>
                    {renderFetchForms(DataValidation, activeStep,setActiveStep)}

                </div>

            </div>

        </>
    )
}
export default AddEditNewStudentDetails