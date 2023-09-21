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
  const [orgType, setOrgType] = useState<{ value: string, label: string }>({ value: "", label: "" })
  const [country, setCountry] = useState<{ value: string, label: string }>({ value: "", label: "" })
  const [state, setState] = useState<{ value: string, label: string }>({ value: "", label: "" })
  const [city, setCity] = useState<{ value: string, label: string }>({ value: "", label: "" })
  const [empID, setEmpID] = useState<{ value: string, label: string }>({ value: "", label: "" })
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
          {({ errors, touched, setFieldValue, values }) => {
            // { console.log(errors, values) }
            return (
              <Form className='form'>
                <div className='formField'>
                  <label htmlFor='orgName'> Org Name :</label>

                  <Field type={"text"}
                    name="orgName"
                    value={values.orgName}
                    id="orgName"
                    placeHolder={"Enter Organzation Name"}
                    className={((touched?.orgName && errors.orgName) ? "fieldErr" : "")}
                    onChange={(e: any) => { setFieldValue("orgName", e.target.value) }}
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
                  />
                </div>
                <div className='formField'>
                  <label htmlFor='orgType'> Organiation Type:</label>
                  <ReactSelect name={"OrgType"}
                    onChange={(e: any) => {
                      setFieldValue("orgType", e.value)
                      setOrgType(e)
                    }}
                    placeHolder={"Organization Type"}
                    options={orgTypeOptions}
                    values={orgType}
                    id={"orgType"}
                  />
                </div>
                <div className='formField'>
                  <label htmlFor='countryName'>CountryName:</label>
                  <ReactSelect name={"countryName"}
                    id={"countryName"}
                    placeHolder={"country"}
                    options={CountryOption}
                    values={country}
                    onChange={(e: any) => {
                      setFieldValue("countryName", e.value)
                      setCountry(e)
                    }} />
                </div>

                <div className='formField'>
                  <label htmlFor='stateName'> State Name:</label>
                  <ReactSelect name={"stateName"}
                    id={"stateName"}
                    placeHolder={"State"}
                    options={StateOption}
                    values={state}
                    onChange={(e: any) => {
                      setFieldValue("stateName", e.value)
                      setState(e)
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
                    values={city}
                    onChange={(e: any) => {
                      setFieldValue("cityName", e.value)
                      setCity(e)
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
                    values={empID}
                    onChange={(e: any) => {
                      setFieldValue("registeredBy", e.value)
                      setEmpID(e)
                    }}
                  />
                </div>
                <div className='formSubmission'>
                  <Button variant="contained" type={'submit'}>Register</Button>
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