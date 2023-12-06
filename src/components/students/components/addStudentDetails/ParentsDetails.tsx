import { ErrorMessage, Field, Formik, Form } from 'formik'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import SubmisonDiv from './SubmissionContainer'
const ParentsDetails = (props: any) => {
    const { DataValidation, activeStep, checkErrosOnTabChange }=props
    const { studenAdmissiontData, formsSubmisionSteps } = useSelector((state: any) => state.studentsModule)


    return (
        <>
            <Formik
                initialValues={studenAdmissiontData[1]}
                validationSchema={formsSubmisionSteps[1]?.validate}
                onSubmit={(values: any) => {

                }}>
                {({ errors, touched, setFieldValue, values}) => {
                    return (
                        <Form 
                        onBlur={(e: any) => {
                            checkErrosOnTabChange(errors, touched) }}
                            >
                            <div className='SectionContainer mt-3 mb-2'>
                                <>{console.log(values, "18..parentsinfo")}</>
                                <h6 className='SectionHeader'>Parents Information :</h6>
                                <hr className='m-0' />
                                <div className='fieldsContainer'>
                                    <div className='field'>
                                        <label htmlFor='parentsInfo.fatherName' className='form-label'> Father Full Name<span className={'text-danger'}>*</span> :  </label>
                                        <Field
                                            type={"text"}
                                            name="parentsInfo.fatherName"
                                            id="parentsInfo.fatherName"
                                            value={values?.parentsInfo?.fatherName}
                                            className={'form-control'}
                                            placeholder={"Father's Name "}
                                        >

                                        </Field>
                                        <div className='text-danger error'><ErrorMessage name={'parentsInfo.fatherName'} /></div>



                                    </div>
                                    <div className='field'>

                                        <label htmlFor='parentsInfo.fatherOccupation' className='form-label'> Father Occupation<span className={'text-danger'}>*</span> :  </label>
                                        <Field
                                            type="text"
                                            name="parentsInfo.fatherOccupation"
                                            id="parentsInfo.fatherOccupation"
                                            value={values?.parentsInfo?.fatherOccupation}
                                            className={'form-control'}
                                            placeholder={"Occupation"}
                                        >

                                        </Field>
                                        <div className='text-danger error'><ErrorMessage name={'parentsInfo.fatherOccupation'} /></div>


                                    </div>
                                    <div className='field'>

                                        <label htmlFor='parentsInfo.fatherHigherEducation' className='form-label'>Qualification<span className={'text-danger'}>*</span> :  </label>
                                        <Field
                                            type="text"
                                            name="parentsInfo.fatherHigherEducation"
                                            id="parentsInfo.fatherHigherEducation"
                                            placeholder={'Qualification '}
                                            value={values?.parentsInfo?.fatherHigherEducation}
                                            className={'form-control'}
                                        >

                                        </Field>
                                        <div className='text-danger error'><ErrorMessage name={'parentsInfo.fatherHigherEducation'} /></div>


                                    </div>
                                    <div className='field'>

                                        <label htmlFor='parentsInfo.motherName' className='form-label'>Mother Name<span className={'text-danger'}>*</span> :  </label>
                                        <Field
                                            type="text"
                                            name="parentsInfo.motherName"
                                            id="parentsInfo.motherName"
                                            placeholder={'Mother Full Name '}
                                            value={values?.parentsInfo?.motherName}
                                            className={'form-control'}
                                        />
                                        <div className='text-danger error'><ErrorMessage name={'parentsInfo.motherName'} /></div>

                                    </div>
                                    <div className='field'>

                                        <label htmlFor='parentsInfo.motherOccupation' className='form-label'> Mother's Occupation<span className={'text-danger'}>*</span> :  </label>
                                        <Field
                                            type="text"
                                            name="parentsInfo.motherOccupation"
                                            id="parentsInfo.motherOccupation"
                                            value={values?.parentsInfo?.motherOccupation}
                                            className={'form-control'}
                                            placeholder={"Occupation"}
                                        />
                                        <div className='text-danger error'><ErrorMessage name={'parentsInfo.motherOccupation'} /></div>

                                    </div>
                                    <div className='field'>

                                        <label htmlFor='parentsInfo.motherHigherEducation' className='form-label'>Qualification<span className={'text-danger'}>*</span>:  </label>
                                        <Field
                                            type="text"
                                            name="parentsInfo.motherHigherEducation"
                                            id="parentsInfo.motherHigherEducation"
                                            placeholder={'Qualification '}
                                            value={values?.parentsInfo?.motherHigherEducation}
                                            className={'form-control'}
                                        />
                                        <div className='text-danger error'><ErrorMessage name={'parentsInfo.motherHigherEducation'} /></div>

                                    </div>
                                    <div className='field'>

                                        <label htmlFor='parentsInfo.localGurdian' className='form-label'>Local Gurdian:  </label>
                                        <Field
                                            type="text"
                                            name="parentsInfo.localGurdian"
                                            id="parentsInfo.localGurdian"
                                            placeholder={'Gurdian '}
                                            value={values?.parentsInfo?.localGurdian}
                                            className={'form-control'}
                                        />

                                    </div>
                                    <div className='field'>
                                        <label htmlFor='parentsInfo.gurdianContactNumber' className='form-label'>Gurdian Contact:  </label>
                                        <Field
                                            type="number"
                                            name="parentsInfo.gurdianContactNumber"
                                            id="parentsInfo.gurdianContactNumber"
                                            placeholder={'Gurdian Contact'}
                                            value={values?.parentsInfo?.gurdianContactNumber}
                                            className={'form-control'}
                                            onChange={((e: any) => {
                                                if (e.target.value?.length > 10) {
                                                    e.preventDefault()
                                                }
                                                else {
                                                    setFieldValue("parentsInfo.gurdianContactNumber", e.target.value)
                                                }
                                            })}
                                        />

                                    </div>
                                    <div className='field'>
                                        <label htmlFor='parentsInfo.primaryConactNumber' className='form-label'>Primary Contact<span className={'text-danger'}>*</span>:  </label>
                                        <Field
                                            type="number"
                                            name="parentsInfo.primaryConactNumber"
                                            id="parentsInfo.primaryConactNumber"
                                            placeholder={'Primary Contact'}
                                            value={values?.parentsInfo?.primaryConactNumber}
                                            className={'form-control'}
                                            onChange={((e: any) => {
                                                if (e.target.value?.length > 10) {
                                                    e.preventDefault()
                                                }
                                                else {
                                                    setFieldValue("parentsInfo.primaryConactNumber", e.target.value)
                                                }
                                            })}
                                        />
                                        <div className='text-danger error'><ErrorMessage name={'parentsInfo.primaryConactNumber'} /></div>

                                    </div>
                                    <div className='field'>
                                        <label htmlFor='parentsInfo.PermenantAddress' className='form-label'>Pemenant Address<span className={'text-danger'}>*</span> :  </label>
                                        <textarea
                                            name="parentsInfo.PermenantAddress"
                                            id="parentsInfo.PermenantAddress"
                                            placeholder={'Permenant Address'}
                                            value={values?.parentsInfo?.PermenantAddress}
                                            className={'form-control'}
                                            cols={5}
                                            onChange={(e: any) => {
                                                setFieldValue('parentsInfo.PermenantAddress', e.target.value)
                                            }}


                                        />
                                        <div className='text-danger error'><ErrorMessage name={'parentsInfo.PermenantAddress'} /></div>

                                    </div>
                                    <div className='field'>
                                        <label htmlFor='parentsInfo.localAddress' className='form-label'>Local Address<span className={'text-danger'}>*</span> :  </label>
                                        <textarea
                                            name="parentsInfo.localAddress"
                                            id="parentsInfo.localAddress"
                                            placeholder={'local Address'}
                                            value={values?.parentsInfo?.localAddress}
                                            onChange={(e: any) => {
                                                setFieldValue('parentsInfo.localAddress', e.target.value)
                                            }}
                                            className={'form-control'}
                                            cols={5}
                                        />
                                        <div className='text-danger error'><ErrorMessage name={'parentsInfo.localAddress'} /></div>

                                    </div>
                                    <div className='field'>
                                        <label htmlFor='parentsInfo.emailId' className='form-label'>Primary Mail Id<span className={'text-danger'}>*</span> :  </label>
                                        <Field
                                            type="email"
                                            name="parentsInfo.emailId"
                                            id="parentsInfo.emailId"
                                            placeholder={'Primary Mail'}
                                            value={values?.parentsInfo?.emailId}
                                            className={'form-control'}

                                        >

                                        </Field>

                                        <div className='text-danger error'><ErrorMessage name={'parentsInfo.emailId'} /></div>


                                    </div>
                                    <div className='field'>

                                        <label htmlFor='parentsInfo.familyYearlyIcome' className='form-label'>Family Yearly Income<span className={'text-danger'}>*</span> : </label>
                                        <Field
                                            type="number"
                                            name="parentsInfo.familyYearlyIcome"
                                            id="parentsInfo.familyYearlyIcome"
                                            value={values?.parentsInfo?.familyYearlyIcome}
                                            className={'form-control'}
                                            placeholder={"Yearly Income"}

                                        />
                                        <div className='text-danger error'><ErrorMessage name={'studentInfo.familyYearlyIcome'} /></div>

                                    </div>
                                    <div className='field'>

                                        <label htmlFor='parentsInfo.gurdianProfile' className='form-label'> Gurdian Profile:  </label>
                                        <input
                                            type={'file'}
                                            name="parentsInfo.gurdianProfile"
                                            placeholder={"Upload Birth Cerificate"}
                                            id="parentsInfo.gurdianProfile"
                                            value={values?.parentsInfo?.gurdianProfile}

                                            className={'form-control'}
                                        />
                                    </div>
                                </div>
                                <SubmisonDiv DataValidation={DataValidation} values={values} errors={errors} touched={touched} activeStep={activeStep} />
                            </div>

                        </Form>
                    )
                }}
            </Formik>

        </>
    )
}
export default ParentsDetails