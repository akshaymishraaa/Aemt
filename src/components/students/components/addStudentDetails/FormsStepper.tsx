import React, { useEffect } from 'react'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { useSelector } from 'react-redux';

export default function FormsStepper(props: any) {
    const { activeStep, setActiveStep } = props
    const { formsSubmisionSteps }=useSelector((state:any)=>state.studentsModule)
    const handleTabChange=(item:any)=>{
        console.log("33", formsSubmisionSteps)
        setActiveStep(item)
    }
   
    return (
        <div className='d-flex justify-content-center align-items-center mx-5 my-3 w-90 stepers'>
            {
                formsSubmisionSteps?.map((item: any, index: number) => {
                    return (
                        <>
                            <button className={(activeStep?.stepNo === index) ? 'w-20 text-center p-1 activesStep' : 'w-20 text-center p-1'} type='button' onClick={(e: any) =>{handleTabChange(item)}}>
                                <p className='p-0 m-0 d-flex justifu-content-around labelContainer'>
                                    <span className='stepLabel'>{item?.name}</span>
                                    {

                                        (item?.submited !== null) ? (item?.submited === false) ? <span className='errorIcon'><ClearRoundedIcon /></span > : <span className='no-errors'><CheckRoundedIcon /></span> : ''

                                    }

                                </p>
                            </button>
                        </>
                    )
                })
            }
        </div>
    )
}
