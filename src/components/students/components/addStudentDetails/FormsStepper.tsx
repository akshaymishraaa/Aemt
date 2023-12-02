import React from 'react'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

export default function FormsStepper(props: any) {
    const { activeStep, setActiveStep, errors, formsSteps } = props

    return (
        <div className='d-flex justify-content-center align-items-center mx-5 my-3 w-90 stepers'>
            {
                formsSteps?.map((item: any, index: number) => {
                    return (
                        <>
                            <div className={(activeStep.stepNo === index) ? 'w-20 text-center p-1 activesStep' : 'w-20 text-center p-1'} onClick={(e: any) => setActiveStep(item)}>
                                <p className='p-0 m-0 d-flex justifu-content-around labelContainer'>
                                    <span className='stepLabel'>{item?.name}</span>
                                    {/* <>
                        {
                            (errors) ?
                                (Object.keys(errors?.studentInfo)?.length > 0) ?
                                    <span className='errorIcon'><ClearRoundedIcon /></span > : <span className='no-errors'><CheckRoundedIcon /></span> : ""

                        }
                    </> */}
                                </p>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}
