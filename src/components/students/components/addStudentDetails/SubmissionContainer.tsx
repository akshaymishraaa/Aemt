import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { studentTypes } from '../../reducer/types'
import { useNavigate } from 'react-router-dom'
const SubmisonDiv = (props: any) => {
    const { values, errors, touched, DataValidation, activeStep, setActiveStep, isValidating } = props
    const { formsSubmisionSteps, studenAdmissiontData } = useSelector((state: any) => state.studentsModule)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const handleCanclePre = (e: any) => {
        if (activeStep.stepNo !== 0) {
            let prevStep = formsSubmisionSteps[(activeStep?.stepNo - 1)]
            setActiveStep(prevStep)
        }
        else {

            navigate('/students')
        }
        let data = { ...values }
        let payload = { ...studenAdmissiontData }
        payload[activeStep.stepNo] = data
        console.log(payload, "previous")
        dispatch({ type: studentTypes.ADD_EDIT_STUDENT_ADMISSIONDETAILS, payload: payload })

    }
    return (
        <>
            <div className='submissonContainer'>
                <button type='button' className='btn btn-secondary'
                    onClick={(e: any) => { handleCanclePre(e) }}
                >  {(activeStep?.stepNo === 0) ? '  Cancel' : 'Previous'}</button>
                <button type='submit' className='btn btn-primary'
                    onClick={(e: any) => { 
                            DataValidation(values, errors, touched)
                     }}
                     disabled={(Object.keys(touched)?.length ===0? true:false )}
                     >
                    {(activeStep?.stepNo !== (formsSubmisionSteps?.length - 1)) ? 'Next' : 'Submit Admission'}

                </button>
            </div>
        </>
    )
}
export default SubmisonDiv