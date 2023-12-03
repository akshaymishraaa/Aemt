import { ErrorMessage, Field } from 'formik'
import React, { useEffect } from 'react'
const OthersDetails = (props: any) => {
    const { values, setFieldValue, touched } = props
    useEffect(() => {
        delete touched.others
        delete touched.studentInfo
        delete touched.previousAcademicDetails
        delete touched.parentsInfo
    }, [])

    return (
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
                                setFieldValue('others.transportationMode', 'self-Transport')

                            }
                            } /> <span> Self Transportation </span></label>
                        <label>
                            <Field type={'radio'}
                                name={'others.transportationMode'}
                                id={"others.transportationMode"}
                                value={'school-transport'}
                                checked={(values?.others?.transportationMode === 'school-transport') ? true : false}
                                onChange={(e: any) => {
                                    setFieldValue('others.transportationMode', 'school-transport')
                                }}
                            />
                            <span> School Transportation </span></label>
                    </div>
                    <div className='text-danger error'><ErrorMessage name={'others.transportationMode'} /></div>

                </div>



            </div>

        </div>
    )

}
export default OthersDetails