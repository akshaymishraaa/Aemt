import React from 'react'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

export default function FormsStepper(props: any) {
    const { activeStep, setActiveStep, errors } = props
    return (
        <div className='d-flex justify-content-start align-items-center mx-5 w-90 stepers'>
            <div className={(activeStep === 0) ? 'w-20 text-center p-1 activesStep' : 'w-20 text-center p-1'} onClick={(e: any) => setActiveStep(0)}>
                <p className='p-0 m-0 d-flex justifu-content-around labelContainer'>
                    <span className='stepLabel'>Personal Info</span>
                    {/* <>
                        {
                            (errors) ?
                                (Object.keys(errors?.studentInfo)?.length > 0) ?
                                    <span className='errorIcon'><ClearRoundedIcon /></span > : <span className='no-errors'><CheckRoundedIcon /></span> : ""

                        }
                    </> */}
                </p>
            </div>
            <div className={(activeStep === 1) ? 'w-20 text-center p-1 activesStep' : 'w-20 text-center p-1'} onClick={(e: any) => setActiveStep(1)}><p className='m-0 p-0'>Parents Info</p></div>
            <div className={(activeStep === 2) ? 'w-20 text-center p-1 activesStep' : 'w-20 text-center p-1'} onClick={(e: any) => setActiveStep(2)}><p className='p-0 m-0'>Previous Students Info</p></div>
            <div className={(activeStep === 3) ? 'w-20 text-center p-1 activesStep' : 'w-20 text-center p-1'} onClick={(e: any) => setActiveStep(3)}><p className='p-0 m-0'> Submit Form</p></div>
        </div>
    )
}
