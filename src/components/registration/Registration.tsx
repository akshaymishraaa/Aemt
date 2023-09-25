import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import { RegistrationModal } from './RegistrationValues';
import * as yup from 'yup'
import './Styles.scss'
import { ValidateRegistration } from './ValidationSchema';
import Button from '@mui/material/Button';
import ReactSelect from '../../common/selectBox/ReactSelect';
import { orgTypeOptions, CountryOption, StateOption, CityOption, EmpOption } from './selectStaticOptions';


function Registration() {
  const [formStates, setformStates] = useState<{ orgType: String, country: String, state: String, city: String, empId: String, formSubmitted: Boolean }>
    ({
      orgType: "",
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
          onSubmit={values => {
            console.log(values, "25....");
          }}>
          {({ errors, touched, setFieldValue, values, handleBlur, isSubmitting, setFieldTouched }) => {
            { console.log(Object.keys(errors), touched, "30....") }
            return (
              <Form className='form'>
                {(Object.keys(errors)?.length === 0 && formStates?.formSubmitted && isSubmitting) ?
                  <p className='regSuccess'> * Organization Registered Successfully</p>: (formStates?.formSubmitted && Object.keys(errors)?.length !== 0) ? <p className='errorsNote'>* Please Check Some Of Mandatory Fields Are Not Appropriate As Req</p> : <p className="InitialNote">* All The Field Are Mandatory For Registration</p>}
                {/* //  (isSubmitting) ? : : >} */}
                <div className='formField'>
                  <label htmlFor='orgName'> Org Name :</label>

                  <Field type={"text"}
                    name="orgName"
                    value={values.orgName}
                    id="orgName"
                    placeHolder={"Enter Organzation Name"}
                    className={((touched?.orgName && errors.orgName) ? "fieldErr" : "")}
                    onChange={(e: any) => { setFieldValue("orgName", e.target.value) }}
                    onBlur={handleBlur}
                  />
                </div>
                <div className='formField'>
                  <label htmlFor='orgMail'> Org MailId :</label>

                  <Field type={"email"}
                    name="orgMail"
                    value={values.orgMail}
                    id="orgMail"
                    placeHolder={"Enter Organzation Mail"}
                    className={(touched?.orgMail && errors.orgMail ? "fieldErr" : "")}
                    onChange={(e: any) => { setFieldValue("orgMail", e.target.value) }}
                    onBlur={handleBlur}
                  />
                </div>
                <div className='formField'>
                  <label htmlFor='orgContactNumber'>Contact No:</label>
                  <Field type={"number"}
                    name="orgContactNumber"
                    value={values.orgContactNumber}
                    id="orgContactNumber"
                    placeHolder={"Org Contact No :"}
                    onChange={(e: any) => { setFieldValue("orgContactNumber", e.target.value) }}
                    className={(touched?.orgContactNumber && errors.orgContactNumber ? "fieldErr" : "")}
                    onBlur={handleBlur}
                  />
                </div>
                <div className='formField'>
                  <label htmlFor='orgType'> Organiation Type:</label>
                  <ReactSelect name={"OrgType"}
                    id={"orgType"}
                    onChange={(e: any) => {
                      console.log("76...")
                      setFieldValue("orgType", e.value)
                      setformStates({ ...formStates, orgType: e })
                    }}
                    placeHolder={"Organization Type"}
                    options={orgTypeOptions}
                    values={formStates?.orgType}
                    className={(touched?.orgType && errors.orgType ? "fieldErr" : "")}
                    onBlur={(e: any) => {
                      setFieldTouched("orgType", true)
                    }}

                  />
                </div>
                <div className='formField'>
                  <label htmlFor='countryName'>CountryName:</label>
                  <ReactSelect name={"countryName"}
                    id={"countryName"}
                    placeHolder={"country"}
                    options={CountryOption}
                    values={formStates?.country}
                    onChange={(e: any) => {
                      setFieldValue("countryName", e.value)
                      setformStates({ ...formStates, country: e })
                    }}
                    className={(touched?.countryName && errors.countryName ? "fieldErr" : "")}
                    onBlur={(e: any) => {
                      setFieldTouched("countryName", true)
                    }}

                  />
                </div>

                <div className='formField'>
                  <label htmlFor='stateName'> State Name:</label>
                  <ReactSelect name={"stateName"}
                    id={"stateName"}
                    placeHolder={"State"}
                    options={StateOption}
                    values={formStates?.state}
                    onChange={(e: any) => {
                      setFieldValue("stateName", e.value)
                      setformStates({ ...formStates, state: e })
                    }}
                    className={(touched?.stateName && errors.stateName ? "fieldErr" : "")}
                    onBlur={(e: any) => {
                      setFieldTouched("stateName", true)
                    }}

                  />
                </div>
                <div className='formField'>
                  <label htmlFor='cityName'> City Name:</label>
                  <ReactSelect
                    name={"cityName"}
                    id={"cityName"}
                    placeHolder={"City"}
                    options={CityOption}
                    values={formStates?.city}
                    onChange={(e: any) => {
                      setFieldValue("cityName", e.value)
                      setformStates({ ...formStates, city: e })
                    }}
                    className={(touched?.cityName && errors.cityName ? "fieldErr" : "")}
                    onBlur={(e: any) => {
                      setFieldTouched("cityName", true)
                    }}
                  />
                </div>
                <div className='formField'>
                  <label htmlFor='orgPinCode'>PinCode:</label>
                  <Field type={"number"}
                    name="orgPinCode"
                    value={values.orgPinCode}
                    id="orgPinCode"
                    placeHolder={"Org PinCode :"}
                    className={(touched?.orgPinCode && errors.orgPinCode ? "fieldErr" : "")}
                    onChange={(e: any) => { setFieldValue("orgPinCode", e.target.value) }}
                  />
                </div>
                <div className='formField'>
                  <label htmlFor='registeredBy'> Registered By:</label>
                  <ReactSelect
                    name={"registeredBy"}
                    id={"registeredBy"}
                    placeHolder={"Registered EmployeeID"}
                    options={EmpOption}
                    values={formStates?.empId}
                    onChange={(e: any) => {
                      setFieldValue("registeredBy", e.value)
                      setformStates({ ...formStates, empId: e })
                    }}
                    className={(touched?.registeredBy && errors.registeredBy ? "fieldErr" : "")}
                    onBlur={(e: any) => {
                      setFieldTouched("registeredBy", true)
                    }}
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