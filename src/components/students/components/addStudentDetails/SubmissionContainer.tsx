import React from 'react'
import { useSelector } from 'react-redux'
const SubmisonDiv = (props: any) => {
    const { values, errors, touched, DataValidation, activeStep } = props
    const { formsSubmisionSteps } = useSelector((state: any) => state.studentsModule)
    const handleCanclePre = (e: any) => {

    }
    return (
        <>
            <div className='submissonContainer'>
                <button type='button' className='btn btn-secondary'
                    onClick={(e: any) => { handleCanclePre(e) }}
                >                      {(activeStep?.stepNo === 0) ? '  Cancel' : 'Previous'}</button>
                <button type='submit' className='btn btn-primary'
                    onClick={(e: any) => { DataValidation(values, errors, touched) }}
                >
                    {(activeStep?.stepNo !== (formsSubmisionSteps?.length - 1)) ? 'Next' : 'Submit Admission'}

                </button>
            </div>
        </>
    )
}
export default SubmisonDiv