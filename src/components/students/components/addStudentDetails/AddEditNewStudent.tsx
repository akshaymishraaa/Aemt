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
import { toastEnabled } from '../../../../actions/Action';
const AddEditNewStudentDetails = (props: any) => {
    const navigate = useNavigate()
    const { studenAdmissiontData, formsSubmisionSteps } = useSelector((state: any) => state.studentsModule)
    const [activeStep, setActiveStep] = useState<any>({})
    const [touched,setToched]=useState()
    const [errors,setErrors]=useState()
    const dispatch = useDispatch()




    const checkErrosOnTabChange=(errors:any,touched:any)=>{
        console.log("rerer",errors,touched)
        setErrors(errors)
        setToched(touched)
    }
    const renderFetchForms = (DataValidation: any, activesStep: any, checkErrosOnTabChange:any) => {
        switch (activeStep?.name) {
            case 'studentInfo':
                return (
                    <>
                        <StudentPersonalDetails DataValidation={DataValidation} activeStep={activeStep} checkErrosOnTabChange={checkErrosOnTabChange} />
                    </>
                )
            case 'parentsInfo':
                return (
                    <>
                        <ParentsDetails DataValidation={DataValidation} activeStep={activeStep} checkErrosOnTabChange={checkErrosOnTabChange}/>
                    </>
                )
            case 'previousAcademicDetails':
                return (
                    <>
                        <PreviousAcademicDetails DataValidation={DataValidation} activeStep={activeStep} checkErrosOnTabChange={checkErrosOnTabChange} />
                    </>
                )
            case 'others':
                return (
                    <>
                        <OthersDetails DataValidation={DataValidation} activeStep={activeStep} checkErrosOnTabChange={checkErrosOnTabChange} />
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
        console.log("69.....", errors, touched, values, formsSubmisionSteps)
        if (Object.keys(touched)?.length === 0 && activeStep?.submited === null) {
            alert("if")
            formsSubmisionSteps[activeStep.stepNo] = { ...activeStep, submited: false }
            // console.log(payload,"73.....payload")
            console.log(formsSubmisionSteps, "73....")
            dispatch({ type: studentTypes.ADMISSION_STEPS, payload: formsSubmisionSteps })
            dispatch(toastEnabled({ summary: 'Error', detail: 'Please fill Fields To Intiate Step Submission', severity: 'info', show: true }))
        }
        else if (Object.keys(touched)?.length > 0 && Object.keys(errors)?.length > 0) {
            alert("elseif81")
            dispatch(toastEnabled({ summary: 'Error', detail: 'Please fill All Mandatory Fields To Complete Step Submission', severity: 'error', show: true }))

        }
        else if (Object.keys(touched)?.length > 0 && Object.keys(errors)?.length === 0) {
            console.log("84.....",activeStep)
            
            if (activeStep.stepNo < (formsSubmisionSteps?.length - 1) && (!activeStep.submited)) {
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
                alert("97...")
                // this is called to intiate the admisssion submission at final step
                initateSFormSubmission(values)
            }

        }
        else if (Object.keys(touched)?.length === 0 && activeStep?.submited !== true) {
            alert("hiii")
        }
    }
    

    const initateSFormSubmission = (values: any) => {
        let validateSubmission = true
        console.log("values",values)
        // formsSubmisionSteps?.map((item: any, index: number) => {
        //     if (!item.submited) {
                
        //     }
        // })

    }

    return (
        <>

            <div className='admissionForm'>
                <div className='formHeading'> Student Admission Form</div>
                <FormsStepper activeStep={activeStep} setActiveStep={setActiveStep} formsSteps={formsSubmisionSteps} />
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
                    {renderFetchForms(DataValidation, activeStep, checkErrosOnTabChange)}

                </div>

            </div>

        </>
    )
}
export default AddEditNewStudentDetails