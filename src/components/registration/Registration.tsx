import React, { useEffect, useRef, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import { RegistrationModal } from './RegistrationValues';
import * as yup from 'yup'
import './Styles.scss'
import { ValidateRegistration } from './ValidationSchema';
import Button from '@mui/material/Button';
import ReactSelect from '../../common/selectBox/ReactSelect';
import axios from 'axios';
import { orgTypeOptions, CityOption, EmpOption } from './selectStaticOptions';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import MailIcon from '@mui/icons-material/Mail';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import DomainIcon from '@mui/icons-material/Domain';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BadgeIcon from '@mui/icons-material/Badge';
import Tooltip from '@mui/material/Tooltip';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import HomeIcon from '@mui/icons-material/Home';
import PasswordIcon from '@mui/icons-material/Password';
import CustomToolTip from '../../common/customTooltip/CustomToolTip';
import { useDispatch } from 'react-redux';
import { getCities, getCountries, getStates, registerOrganization } from '../actions/actions';
import { Actiontypes } from '../../types/ActionTypes';
import { extractOptions } from './helpers';

function Registration() {
  const navigate = useNavigate()
  const isLoaded = useRef(true)
  const styles: any = {
    control: (base: any, state: any) => ({
      ...base,
      background: state.isDisabled ? "grey" : "none",
      cursor: state.isDisabled ? 'not-allowed !important' : "pointer",
      // outline: 0,
      border: '0 !important',

      // match with the menu
      borderRadius: state.isFocused ? 'none' : 'none',
      // // // Overwrittes the different states of border
      // borderColor: state.isFocused ? 'none' : 'none',
      // // Removes weird border around container
      // boxShadow: state.isFocused ? null : null,
      "&:hover": {
        outline: "none",
        border: state.isFocused ? '0 !important' : '0 !important',
        borderRadius: state.isFocused ? 'none' : 'none',
        boxShadow: state.isFocused ? 'none' : 'none',
        // // Overwrittes the different states of border
        // borderColor: state.isFocused ? 'none' : 'none',
        backgouund: state.isFocused ? 'none' : 'none',
        // Overwrittes the different states of border
        // borderColor: state.isFocused ? "red" : "blue"
      },
    }),
    singleValue: (provided: any, { isDisabled }: any) => ({
      ...provided,
      color: 'white',
      "&:disabled": {
        background: "grey"
      }
      // fontSize: state.selectProps.myFontSize
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      color: 'black',
    }),
    // input: ((provided: any, state: any)=>{
    //   ...provided,
    //   back
    // })
  };
  const [formStates, setformStates] = useState<{ organizationType: { label: String, value: String }, country: { label: String, value: String }, state: { label: String, value: String }, city: { label: String, value: String }, empId: { label: String, value: String }, formSubmitted: Boolean }>
    ({
      organizationType: { label: '', value: '' },
      country: { label: '', value: '' },
      state: { label: '', value: '' },
      city: { label: '', value: '' },
      empId: { label: '', value: '' },
      formSubmitted: false
    })
  const [countriesOpt, setCountriesOpt] = useState<any>()
  const [stateOpt, setStateOpt] = useState<any>()


  const handleBackToSighnIn = () => {
    navigate('/')

  }
  const dispatch = useDispatch()
  
  const renderTooltip = (err: any, name: string, touched: any) => {
    return (
      <>
        <p>{(err && touched) ? err : `Please Enter ${name}`}</p>
      </>
    )

  }

  const userReg = (values: any) => {
    dispatch(registerOrganization(values, (data: any) => {
      dispatch({ type: Actiontypes.RECENT_REGISTERED_ORG, payload: data })
      sessionStorage.setItem("data",JSON.stringify(data))

      navigate('/createUser')
    }))


  }

  const onStateChangeHandler = (e: any, setFieldValue: any) => {
    setformStates({ ...formStates, state: e })
    setFieldValue("state", e.value)
    const payload = ({
      countryId: formStates.country.value,
      stateId: e.value
    })
    console.log(formStates, "formStates")
    dispatch(getCities(payload, (response: any) => {
      console.log(response, "115.....")
    }))
  }

  const onCountryChangeHandler = (e: any, setFieldValue: any) => {
    setFieldValue("country", e.value)
    setformStates({ ...formStates, country: e })
    const payload = ({
      countryId: e.value
    })
    dispatch(getStates(payload, (response: any) => {
      let stateList = extractOptions(response)
      setStateOpt(stateList)
    }))

  }

  useEffect(() => {
    if (isLoaded.current) {

      dispatch(getCountries((response: any) => {
        if (response?.length > 0) {
          let CoutriesOptList = extractOptions(response)
          setCountriesOpt(CoutriesOptList)

        }
        else {

        }

      }))
      isLoaded.current = false
    }
  }, [])

  return (
    <div className=' row RegistrationPageMain col-12 p-0 m-0'>

      {/* <p className='backToSighnIn' onClick={() => { handleBackToSighnIn() }}><ArrowBackOutlinedIcon />Back To SighnIn </p> */}
      <div className='formContainer' >
        <Formik
          initialValues={RegistrationModal}
          validationSchema={ValidateRegistration}
          onSubmit={(values: any) => {
            userReg(values)

          }}>
          {({ errors, touched, setFieldValue, values, handleBlur, isSubmitting, setFieldTouched }) => {
            { console.log(values, errors, touched, "30....") }
            return (

              <Form className='form'>
                {(Object.keys(errors)?.length === 0 && formStates?.formSubmitted && isSubmitting) ?
                  <p className='regSuccess'> * Organization Registered Successfully</p> :
                  (formStates?.formSubmitted && Object.keys(errors)?.length !== 0) ?
                    <p className='errorsNote'>* Please Check Some Of Mandatory Fields Are Not Appropriate As Req</p> :
                    <p className="InitialNote">* All The Field Are Mandatory For Registration</p>}
                <div className='row fieldsRow'>
                  <div className='formField col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                    <CustomToolTip title={renderTooltip(errors?.organizationName, Object.keys(values)[0], touched?.organizationName)} placement="left">
                      <CorporateFareIcon sx={{ fontSize: "30px" }} className='fieldIcon' style={{ color: (errors?.organizationName && touched?.organizationName) ? 'red' : '' }} />
                    </CustomToolTip>


                    <Field type={"text"}
                      name="organizationName"
                      value={values.organizationName}
                      id="organizationName"
                      placeHolder={"Enter Organzation Name"}
                      className={((touched?.organizationName && errors.organizationName) ? "fieldErr" : "")}
                      onChange={(e: any) => { setFieldValue("organizationName", e.target.value) }}
                      onBlur={handleBlur}
                      spellCheck={false}
                    />

                    {/* </CustomToolTip> */}

                  </div>
                  <div className='formField col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                    <CustomToolTip title={renderTooltip(errors?.organizationEmailId, Object.keys(values)[1], touched?.organizationEmailId)} placement="left">
                      <MailIcon sx={{ fontSize: "30px" }} className='fieldIcon' style={{ color: (errors?.organizationEmailId && touched?.organizationEmailId) ? 'red' : '' }} />
                    </CustomToolTip>
                    <Field type={"email"}
                      name="organizationEmailId"
                      value={values.organizationEmailId}
                      id="organizationEmailId"
                      placeHolder={"Enter Organzation Mail"}
                      className={(touched?.organizationEmailId && errors.organizationEmailId ? "fieldErr" : "")}
                      onChange={(e: any) => { setFieldValue("organizationEmailId", e.target.value) }}
                      onBlur={handleBlur}
                      spellCheck={false}
                    />
                  </div>
                  <div className='formField col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                    <CustomToolTip title={renderTooltip(errors?.contactNumber, Object.keys(values)[2], touched?.contactNumber)} placement="left">
                      <AddIcCallIcon sx={{ fontSize: "30px" }} className='fieldIcon' style={{ color: (errors?.contactNumber && touched?.contactNumber) ? 'red' : '' }} />
                    </CustomToolTip>
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
                </div>
                <div className='row fieldsRow'>
                  <div className='formField-select col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                    <CustomToolTip title={renderTooltip(errors?.organizationType, Object.keys(values)[3], touched?.organizationType)} placement="left">
                      <DomainIcon sx={{ fontSize: "30px" }} className='fieldIcon' style={{ color: (errors?.organizationType && touched?.organizationType) ? 'red' : '' }} />
                    </CustomToolTip>
                    <ReactSelect name={"OrgTyporganizationType"}
                      id={"organizationType"}
                      onChange={(e: any) => {
                        console.log("76...")
                        setformStates({ ...formStates, organizationType: e })

                        setFieldValue("organizationType", e.value)
                      }}
                      styles={styles}

                      placeHolder={"Organization Type"}
                      options={orgTypeOptions}
                      values={formStates?.organizationType}
                      className={(touched?.organizationType && errors.organizationType ? "fieldErr" : "selectField")}


                    />
                  </div>
                  <div className='formField-select col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                    <CustomToolTip title={renderTooltip(errors?.country, Object.keys(values)[4], touched?.country)} placement="left">
                      <PublicIcon sx={{ fontSize: "30px" }} className='fieldIcon' style={{ color: (errors?.country && touched?.country) ? 'red' : '' }} />
                    </CustomToolTip>
                    <ReactSelect name={"country"}
                      id={"country"}
                      styles={styles}
                      placeHolder={"country"}
                      options={countriesOpt}
                      values={formStates?.country}
                      disabled={false}
                      onChange={(e: any) => {
                        onCountryChangeHandler(e, setFieldValue)
                      }}
                      className={(touched?.country && errors.country ? "fieldErr" : "selectField")}


                    />
                  </div>
                  <div className='formField-select col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                    <CustomToolTip title={renderTooltip(errors?.state, Object.keys(values)[5], touched?.state)} placement="left">

                      <LocationOnIcon sx={{ fontSize: "30px" }} className='fieldIcon' style={{ color: (errors?.state && touched?.state) ? 'red' : '' }} />
                    </CustomToolTip>
                    <ReactSelect name={"state"}
                      id={"state"}
                      styles={styles}
                      placeHolder={"State"}
                      options={stateOpt}
                      values={formStates?.state}
                      disabled={(values?.country) ? false : true}
                      onChange={(e: any) => {
                        onStateChangeHandler(e, setFieldValue)
                      }}
                      className={(touched?.state && errors?.state ? "fieldErr" : "selectField")}


                    />
                  </div>
                  <div className='formField-select col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                    <CustomToolTip title={renderTooltip(errors?.city, Object.keys(values)[6], touched?.city)} placement="left">

                      <LocationCityIcon sx={{ fontSize: "30px" }} className='fieldIcon' style={{ color: (errors?.city && touched?.city) ? 'red' : '' }} />
                    </CustomToolTip>
                    <ReactSelect
                      name={"city"}
                      styles={styles}
                      id={"city"}
                      placeHolder={"City"}
                      options={CityOption}
                      disabled={(values.state) ? false : true}
                      values={formStates?.city}
                      onChange={(e: any) => {
                        setFieldValue("city", e.value)
                        setformStates({ ...formStates, city: e })
                      }}
                      className={(touched?.city && errors.city ? "fieldErr" : "selectField")}
                    />
                  </div>
                  <div className='formField-select col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                    <CustomToolTip title={renderTooltip(errors?.regEmpId, Object.keys(values)[7], touched?.regEmpId)} placement="left">

                      <BadgeIcon sx={{ fontSize: "30px" }} className='fieldIcon' style={{ color: (errors?.regEmpId && touched?.regEmpId) ? 'red' : '' }} />
                    </CustomToolTip>
                    <ReactSelect
                      name={"regEmpId"}
                      id={"regEmpId"}
                      styles={styles}
                      placeHolder={"EmployeeID"}
                      options={EmpOption}
                      values={formStates?.empId}
                      onChange={(e: any) => {
                        setFieldValue("regEmpId", e.value)
                        setformStates({ ...formStates, empId: e })
                      }}
                      className={(touched?.regEmpId && errors.regEmpId ? "fieldErr" : "selectField")}
                    />
                  </div>
                  <div className='formField col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                    <CustomToolTip title={renderTooltip(errors?.zipCode, Object.keys(values)[8], touched?.zipCode)} placement="left">
                      <GpsFixedIcon sx={{ fontSize: "30px" }} className='fieldIcon' style={{ color: (errors?.zipCode && touched?.zipCode) ? 'red' : '' }} />
                    </CustomToolTip>
                    <Field type={"number"}
                      name="zipCode"
                      value={values.zipCode}
                      id="zipCode"
                      placeHolder={"zipCode "}
                      className={(touched?.zipCode && errors.zipCode ? "fieldErr" : "")}
                      onChange={(e: any) => { setFieldValue("zipCode", parseInt(e.target.value)) }}
                    />
                  </div>
                </div>
                <div className='row fieldsRow'>
                  <div className='formField col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                    <CustomToolTip title={renderTooltip(errors?.address, Object.keys(values)[9], touched?.address)} placement="left">
                      <HomeIcon sx={{ fontSize: "30px" }} className='fieldIcon' style={{ color: (errors?.address && touched?.address) ? 'red' : '' }} />
                    </CustomToolTip>
                    <Field type={"text"}
                      name="address"
                      value={values.address}
                      id="address"
                      placeHolder={"Full address "}
                      className={(touched?.address && errors.address ? "fieldErr" : "")}
                      onChange={(e: any) => { setFieldValue("address", e.target.value) }}
                      spellCheck={false}
                    />
                  </div>
                  {/* <div className='formField col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                    <CustomToolTip title={renderTooltip(errors?.password, Object.keys(values)[10], touched?.password)} placement="left">

                      <PasswordIcon sx={{ fontSize: "30px" }} className='fieldIcon' style={{ color: (errors?.password && touched?.password) ? 'red' : '' }} />
                    </CustomToolTip>
                    <Field type={"password"}
                      name="password"
                      value={values.password}
                      id="password"
                      placeHolder={"Password"}
                      className={(touched?.password && errors.password ? "fieldErr" : "")}
                      onChange={(e: any) => { setFieldValue("password", e.target.value) }}
                      spellCheck={false}
                    />
                  </div> */}
                  {/* <div className='formField col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                    <CustomToolTip title={renderTooltip(errors?.confirmPassword, Object.keys(values)[11], touched?.confirmPassword)} placement="left">

                      <PasswordIcon sx={{ fontSize: "30px" }} className='fieldIcon' style={{ color: (errors?.confirmPassword && touched?.confirmPassword) ? 'red' : '' }} />
                    </CustomToolTip>
                    <Field type={"password"}
                      name="confirmPassword"
                      value={values.confirmPassword}
                      id="confirmPassword"
                      placeHolder={"Confirm Password"}
                      className={(touched?.confirmPassword && errors.confirmPassword ? "fieldErr" : "")}
                      onChange={(e: any) => { setFieldValue("confirmPassword", e.target.value) }}
                      spellCheck={false}

                    />
                  </div> */}
                </div>
                <div className='formSubmission'>
                  <div>
                    <div className='register'>
                      <Button variant="contained" type={'submit'} onClick={(e: any) => { setformStates({ ...formStates, formSubmitted: true }) }}>Register organization</Button>
                    </div>
                    <Button variant="outlined" className="back-btn" color="success" type={'button'} onClick={(e: any) => { handleBackToSighnIn() }}>Go back to sign in</Button>
                  </div>
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