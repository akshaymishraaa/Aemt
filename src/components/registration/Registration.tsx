import React from 'react'
import { Formik, Form, Field } from 'formik';
import { RegistrationModal } from './RegistrationValues';
import * as yup from 'yup'
import './Styles.scss'
import { ValidateRegistration } from './ValidationSchema';
import Button from '@mui/material/Button';
import ReactSelect from '../../common/selectBox/ReactSelect';


function Registration() {
  const selectOrgType = () => {

  }
  return (
    <div className='RegistrationPageMain'>
      <p>ORGANIZATION REGISTRATION</p>
      <div className='formContainer'>

        <Formik
          initialValues={RegistrationModal}
          validationSchema={ValidateRegistration}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}>
          {({ errors, touched, values, setFieldValue, handleBlur }) => {
            { console.log(touched, errors) }
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
                    className={(touched?.orgContactNumber && errors.orgContactNumber ? "fieldErr" : "")}
                  />
                </div>
                <div className='formField'>
                  <label htmlFor='orgType'> Organiation Type:</label>
                  <ReactSelect name={"OrgType"} value={values.orgType} onChange={selectOrgType} />
                </div>
                <div className='formField'>
                  <label htmlFor='countryName'>CountryName:</label>
                  <ReactSelect name={"countryName"} value={values.countryName} onChange={selectOrgType} />
                </div>

                <div className='formField'>
                  <label htmlFor='stateName'> State Name:</label>
                  <ReactSelect name={"stateName"} value={values.stateName} onChange={selectOrgType} />
                </div>
                <div className='formField'>
                  <label htmlFor='cityName'> City Name:</label>
                  <ReactSelect name={"cityName"} value={values.cityName} onChange={selectOrgType} />
                </div>
                <div className='formField'>
                  <label htmlFor='orgPinCode'>PinCode:</label>
                  <Field type={"number"}
                    name="orgPinCode"
                    value={values.orgPinCode}
                    id="orgPinCode"
                    placeHolder={"Org PinCode :"}
                    className={(touched?.orgPinCode && errors.orgPinCode ? "fieldErr" : "")}
                  />
                </div>
                <div className='formField'>
                  <label htmlFor='registeredBy'> Registered By:</label>
                  <ReactSelect name={"registeredBy"} value={values.registeredBy} onChange={selectOrgType} />
                </div>
                <div className='formSubmission'>
                  <Button variant="contained">Register</Button>
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