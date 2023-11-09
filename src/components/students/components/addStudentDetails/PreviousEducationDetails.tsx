import { Field } from 'formik'
import React from 'react'
const PreviousAcademicDetails = (props: any) => {
    const { values, setFieldValue } = props

    return (
        <>
            <div className='SectionContainer mt-3 mb-2'>
                <h6 className='SectionHeader'>Previous Academic Details :</h6>
                <hr className='m-0' />
                <div className='fieldsContainer'>
                    <div className='field'>

                        <label htmlFor='previousAcademicDetails.lastClassDetails' className='form-label'> Last Class Completed:  </label>
                        <Field
                            type="text"
                            name="previousAcademicDetails.lastClassDetails"
                            id="previousAcademicDetails.lastClassDetails"
                            value={values.previousAcademicDetails.lastClassDetails}
                            className={'form-control'}
                            placeholder={"Last Class Completed"}
                        >
                        </Field>

                    </div>
                    <div className='field'>

                        <label htmlFor='previousAcademicDetails.schoolName' className='form-label'> Previous School Name:  </label>
                        <Field
                            type="text"
                            name="previousAcademicDetails.schoolName"
                            id="previousAcademicDetails.schoolNamer"
                            value={values.previousAcademicDetails.schoolName}
                            className={'form-control'}
                            placeholder={"School Name"}

                        >

                        </Field>

                    </div>
                    <div className='field'>

                        <label htmlFor='previousAcademicDetails.lastAcedamicPercentage' className='form-label'>Previous Academic Performance:  </label>
                        <Field
                            type="text"
                            name="previousAcademicDetails.lastAcedamicPercentage"
                            id="previousAcademicDetails.lastAcedamicPercentage"
                            placeholder={'Personal Mail'}
                            value={values.previousAcademicDetails.lastAcedamicPercentage}
                            className={'form-control'}
                        >

                        </Field>

                    </div>
                    <div className='field'>

                        <label htmlFor='previousAcademicDetails.transferCertificate' className='form-label'> Transfer Certificate:  </label>
                        <input
                            type={'file'}
                            name="previousAcademicDetails.transferCertificate"
                            placeholder={"Upload Tc"}
                            id="previousAcademicDetails.transferCertificate"
                            value={values.previousAcademicDetails.transferCertificate}

                            className={'form-control'}
                        />

                        {/* </Field> */}

                    </div>
                </div>
            </div>
        
        </>
    )
}
export default PreviousAcademicDetails