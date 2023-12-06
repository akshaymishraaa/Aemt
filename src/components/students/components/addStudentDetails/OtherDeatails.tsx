import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import SubmisonDiv from './SubmissionContainer'
const OthersDetails = (props: any) => {
    const { DataValidation, activeStep, checkErrosOnTabChange } = props
    const { studenAdmissiontData, formsSubmisionSteps } = useSelector((state: any) => state.studentsModule)
    const transfortationChangeHandler=(e:any,setFieldValue:any)=>{
        setFieldValue('others.transportationMode', e.target.value)

    }
   

    return (
        <Formik
            initialValues={studenAdmissiontData[3]}
            validationSchema={formsSubmisionSteps[3]?.validate}
            onSubmit={(values: any) => {

            }}>
            {({ errors, touched, setFieldValue, values }) => {
                return (
                    <Form
                        onBlur={(e: any) => {
                            checkErrosOnTabChange(errors, touched)
                        }}
                    >
                        <div className='SectionContainer mt-3'>
                            <h6 className='SectionHeader'> Others:</h6>
                            <hr className='m-0' />
                            <div className='fieldsContainer pb-3'>
                                <div className='field'>
                                    <label htmlFor='others.transportationMode' className='form-label'> Transportation Mode<span className={'text-danger'}>*</span> :  </label>
                                    <div className='radioContainer'>
                                        <label> <Field type={'radio'}
                                            name={'others.transportationMode'}
                                            id={"others.transportationMode"}
                                            value={'self-Transport'}
                                            checked={(values?.others?.transportationMode === 'self-Transport') ? true : false}

                                            onChange={(e: any) => {
                                                transfortationChangeHandler(e,setFieldValue)

                                            }
                                            } /> <span> Self Transportation </span></label>
                                        <label>
                                            <Field type={'radio'}
                                                name={'others.transportationMode'}
                                                id={"others.transportationMode"}
                                                value={'school-transport'}
                                                checked={(values?.others?.transportationMode === 'school-transport') ? true : false}
                                                onChange={(e: any) => {
                                                    transfortationChangeHandler(e, setFieldValue)
                                                }}
                                            />
                                            <span> School Transportation </span></label>
                                    </div>
                                    <div className='text-danger error'><ErrorMessage name={'others.transportationMode'} /></div>

                                </div>




                            </div>
                            <SubmisonDiv values={values} errors={errors} touched={touched} DataValidation={DataValidation} activeStep={activeStep} />


                        </div>
                    </Form>
                )
            }}
        </Formik>

    )

}
export default OthersDetails