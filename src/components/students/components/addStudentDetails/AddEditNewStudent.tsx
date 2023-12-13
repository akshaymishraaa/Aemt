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


    const renderFetchForms = (DataValidation: any, activesStep: any, setActiveStep: any, dispatchFormVlaues:any) => {
        switch (activeStep?.name) {
            case 'studentInfo':
                return (
                    <>
                        <StudentPersonalDetails DataValidation={DataValidation} activeStep={activeStep} setActiveStep={setActiveStep} dispatchFormVlaues={dispatchFormVlaues}/>
                    </>
                )
            case 'parentsInfo':
                return (
                    <>
                        <ParentsDetails DataValidation={DataValidation} activeStep={activeStep} setActiveStep={setActiveStep} dispatchFormVlaues={dispatchFormVlaues}/>
                    </>
                )
            case 'previousAcademicDetails':
                return (
                    <>
                        <PreviousAcademicDetails DataValidation={DataValidation} activeStep={activeStep} setActiveStep={setActiveStep} dispatchFormVlaues={dispatchFormVlaues} />
                    </>
                )
            case 'others':
                return (
                    <>
                        <OthersDetails DataValidation={DataValidation} activeStep={activeStep} setActiveStep={setActiveStep} dispatchFormVlaues={dispatchFormVlaues} />
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


    // DispatchFormVlaues 
    const dispatchFormVlaues=(values:any)=>{
        let data = studenAdmissiontData[activeStep?.stepNo]= values
        let payload = studenAdmissiontData
        payload[activeStep?.stepNo] = data
        dispatch({ type: studentTypes.ADD_EDIT_STUDENT_ADMISSIONDETAILS, payload: payload })        
    }

    // intialStepMovetoNextStep
    const advanceToNextStepValiDated=()=>{
        let next_Step = formsSubmisionSteps[activeStep.stepNo + 1]
        setActiveStep(next_Step)
        formsSubmisionSteps[activeStep.stepNo] = { ...activeStep, submited: true }
        dispatch({ type: studentTypes.ADMISSION_STEPS, payload: formsSubmisionSteps })

    }

    // finalStepValidatoion
    const formSubmisionValidation=()=>{
        let validateCompleteSubmission = formsSubmisionSteps?.filter((item: any) => item.submited !== true)
        if (validateCompleteSubmission?.length === 0) {
            dispatch(toastEnabled({ summary: 'Admission Completed', detail: 'Student Enrolled success fully', severity: 'success', show: true }))

        }
        else {
            dispatch(toastEnabled({ summary: 'Incomplete Steps', detail: 'Completed Every Step To Process Admission', severity: 'error', show: true }))
        }
    }

// Throw Errors When step is Validated 

    const stepHasErrorsToValidate=()=>{
        formsSubmisionSteps[activeStep.stepNo] = { ...activeStep, submited: false }
        dispatch({ type: studentTypes.ADMISSION_STEPS, payload: formsSubmisionSteps })
        dispatch(toastEnabled({ summary: 'Error', detail: 'Please fill Madatory fields ToComplete the step', severity: 'error', show: true }))

    }

    // this Method used to move next step if there is no issues in the current Step
    const DataValidation = (values: any, errors: any, touched: any) => {
        // if (Object.keys(touched)?.length !== 0 ) {
            if (Object.keys(errors)?.length === 0) {
                if (activeStep.stepNo < (formsSubmisionSteps?.length - 1)) {
                    advanceToNextStepValiDated()
                }
                else {
                    // let validateCompleteSubmission=false
                    if (!formsSubmisionSteps[activeStep.stepNo].submited) {
                        formsSubmisionSteps[activeStep.stepNo] = { ...activeStep, submited: true }
                        dispatch({ type: studentTypes.ADMISSION_STEPS, payload: formsSubmisionSteps })
                    }
                    formSubmisionValidation()
                }
            }
            else {
                stepHasErrorsToValidate()
                   

            }

        // }
        // else {
        //     if (activeStep?.submited === null || activeStep?.submited === false) {
        //         stepHasErrorsToValidate()
                
        //     }
        //     else {
        //         if(activeStep?.stepNo !== 3){
        //             let next_Step = formsSubmisionSteps[activeStep.stepNo + 1]
        //             setActiveStep(next_Step)
        //         }
        //         else{
        //             formSubmisionValidation()
        //         }

        //     }
        // }
    }

    return (
        <>

            <div className='admissionForm'>
                <div className='formHeading'> Student Admission Form</div>
                <FormsStepper activeStep={activeStep} setActiveStep={setActiveStep}/>
                <div className='w-100 justify-content-end'>
                    <div className="studentTypeDef d-flex  ">
                        <NavLink to='/students' className='d-flex justify-content-end navlink mx-3'>
                            <ArrowBackIcon
                            />
                            Go back</NavLink>
                    </div>
                </div>
                <div className='SectionsContainer'>
                    {renderFetchForms(DataValidation, activeStep, setActiveStep, dispatchFormVlaues)}

                </div>

            </div>

        </>
    )
}
export default AddEditNewStudentDetails