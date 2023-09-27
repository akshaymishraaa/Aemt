import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import { RegistrationModal } from './RegistrationValues';
import * as yup from 'yup'
import './Styles.scss'
import { ValidateRegistration } from './ValidationSchema';
import Button from '@mui/material/Button';
import ReactSelect from '../../common/selectBox/ReactSelect';
import axios from 'axios';
import { orgTypeOptions, CountryOption, StateOption, CityOption, EmpOption } from './selectStaticOptions';


function Registration() {
  const [formStates, setformStates] = useState<{ organizationType: String, country: String, state: String, city: String, empId: String, formSubmitted: Boolean }>
    ({
      organizationType: "",
      country: "",
      state: "",
      city: "",
      empId: "",
      formSubmitted: false
    })
  return (
    <div className='RegistrationPageMain'>
      <p>ORGANIZATION REGISTRATION</p>
      <div className='formContainer'>

        <Formik
          initialValues={RegistrationModal}
          validationSchema={ValidateRegistration}
          onSubmit={(values: any) => {
            axios.post('http://localhost:3001/api/registerUser', {
              data: values
            })
              .then((response: any) => {
                console.log(response.data);
                // Handle data
              })
              .catch((error: any) => {
                console.log(error, "40...");
              })
          }}>
          {({ errors, touched, setFieldValue, values, handleBlur, isSubmitting, setFieldTouched }) => {
            { console.log(errors, touched, "30....") }
            return (
              <Form className='form'>
                {(Object.keys(errors)?.length === 0 && formStates?.formSubmitted && isSubmitting) ?
                  <p className='regSuccess'> * Organization Registered Successfully</p> : (formStates?.formSubmitted && Object.keys(errors)?.length !== 0) ? <p className='errorsNote'>* Please Check Some Of Mandatory Fields Are Not Appropriate As Req</p> : <p className="InitialNote">* All The Field Are Mandatory For Registration</p>}
                {/* //  (isSubmitting) ? : : >} */}
                <div className='formField'>
                  <label htmlFor='organizationName'> Org Name :</label>

                  <Field type={"text"}
                    name="organizationName"
                    value={values.organizationName}
                    id="organizationName"
                    placeHolder={"Enter Organzation Name"}
                    className={((touched?.organizationName && errors.organizationName) ? "fieldErr" : "")}
                    onChange={(e: any) => { setFieldValue("organizationName", e.target.value) }}
                    onBlur={handleBlur}
                  />
                </div>
                <div className='formField'>
                  <label htmlFor='organizationEmailId'> Org MailId :</label>

                  <Field type={"email"}
                    name="organizationEmailId"
                    value={values.organizationEmailId}
                    id="organizationEmailId"
                    placeHolder={"Enter Organzation Mail"}
                    className={(touched?.organizationEmailId && errors.organizationEmailId ? "fieldErr" : "")}
                    onChange={(e: any) => { setFieldValue("organizationEmailId", e.target.value) }}
                    onBlur={handleBlur}
                  />
                </div>
                <div className='formField'>
                  <label htmlFor='contactNumber'>Contact No:</label>
                  <Field type={"number"}
                    name="contactNumber"
                    value={values.contactNumber}
                    id="contactNumber"
                    placeHolder={"Org Contact No :"}
                    onChange={(e: any) => { setFieldValue("contactNumber", parseInt(e.target.value)) }}
                    className={(touched?.contactNumber && errors.contactNumber ? "fieldErr" : "")}
                    onBlur={handleBlur}
                  />
                </div>
                <div className='formField'>
                  <label htmlFor='organizationType'> Organiation Type:</label>
                  <ReactSelect name={"OrgTyporganizationType"}
                    id={"organizationType"}
                    onChange={(e: any) => {
                      console.log("76...")
                      setFieldValue("organizationType", e.value)
                      setformStates({ ...formStates, organizationType: e })
                    }}
                    placeHolder={"Organization Type"}
                    options={orgTypeOptions}
                    values={formStates?.organizationType}
                    className={(touched?.organizationType && errors.organizationType ? "fieldErr" : "")}
                    onBlur={(e: any) => {
                      setFieldTouched("organizationType", true)
                    }}

                  />
                </div>
                <div className='formField'>
                  <label htmlFor='country'>CountryName:</label>
                  <ReactSelect name={"country"}
                    id={"country"}
                    placeHolder={"country"}
                    options={CountryOption}
                    values={formStates?.country}
                    onChange={(e: any) => {
                      setFieldValue("country", e.value)
                      setformStates({ ...formStates, country: e })
                    }}
                    className={(touched?.country && errors.country ? "fieldErr" : "")}
                    onBlur={(e: any) => {
                      setFieldTouched("country", true)
                    }}

                  />
                </div>

                <div className='formField'>
                  <label htmlFor='state'> State Name:</label>
                  <ReactSelect name={"state"}
                    id={"state"}
                    placeHolder={"State"}
                    options={StateOption}
                    values={formStates?.state}
                    onChange={(e: any) => {
                      setFieldValue("state", e.value)
                      setformStates({ ...formStates, state: e })
                    }}
                    className={(touched?.state && errors.state ? "fieldErr" : "")}
                    onBlur={(e: any) => {
                      setFieldTouched("state", true)
                    }}

                  />
                </div>
                <div className='formField'>
                  <label htmlFor='city'> City Name:</label>
                  <ReactSelect
                    name={"city"}
                    id={"city"}
                    placeHolder={"City"}
                    options={CityOption}
                    values={formStates?.city}
                    onChange={(e: any) => {
                      setFieldValue("city", e.value)
                      setformStates({ ...formStates, city: e })
                    }}
                    className={(touched?.city && errors.city ? "fieldErr" : "")}
                    onBlur={(e: any) => {
                      setFieldTouched("city", true)
                    }}
                  />
                </div>
                <div className='formField'>
                  <label htmlFor='regEmpId'> Registered By:</label>
                  <ReactSelect
                    name={"regEmpId"}
                    id={"regEmpId"}
                    placeHolder={"Registered EmployeeID"}
                    options={EmpOption}
                    values={formStates?.empId}
                    onChange={(e: any) => {
                      setFieldValue("regEmpId", e.value)
                      setformStates({ ...formStates, empId: e })
                    }}
                    className={(touched?.regEmpId && errors.regEmpId ? "fieldErr" : "")}
                    onBlur={(e: any) => {
                      setFieldTouched("regEmpId", true)
                    }}
                  />
                </div>
                <div className='formField'>
                  <label htmlFor='zipCode'>PinCode:</label>
                  <Field type={"number"}
                    name="zipCode"
                    value={values.zipCode}
                    id="zipCode"
                    placeHolder={"zipCode "}
                    className={(touched?.zipCode && errors.zipCode ? "fieldErr" : "")}
                    onChange={(e: any) => { setFieldValue("zipCode", parseInt(e.target.value)) }}
                  />
                </div>
                <div className='formField'>
                  <label htmlFor='address'>Full Address:</label>
                  <Field type={"text"}
                    name="address"
                    value={values.address}
                    id="address"
                    placeHolder={"Full address "}
                    className={(touched?.address && errors.address ? "fieldErr" : "")}
                    onChange={(e: any) => { setFieldValue("address", e.target.value) }}
                  />
                </div>

                <div className='formSubmission'>
                  <Button variant="contained" type={'submit'} onClick={(e: any) => { setformStates({ ...formStates, formSubmitted: true }) }}>Register</Button>
                </div>


              </Form>


            )
          }}
        </Formik>
      </div>
    </div>
  )
}

export default Registration