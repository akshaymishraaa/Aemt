import React, { useState } from 'react'
import CommonCard from '../../common/CommonCard'
import { UserProfileModal } from './UseProfileValues'
import { UserProfileValidation } from './ProfileValidationSchema'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserDetails } from '../actions/actions';
import { Actiontypes } from '../../types/ActionTypes';
import userprofileimage from '../../assets/userpic.png'
import "../../../src/App.scss";
function UserProfile() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: any) => state.application);

  React.useEffect(() => {
    dispatch(
      getAllUserDetails((data: any) => {
        dispatch({ type: Actiontypes.GET_ALL_USER_DATA, payload: data });
      })
    );
  }, [])


  return (
    <React.Fragment>
      {/* <CommonCard title={'User profile'}> 
      </CommonCard> */}
      <div className='d-flex mt-4'>
        <Formik
          initialValues={userData}
          validationSchema={UserProfileValidation}
          onSubmit={() => {

            console.log(userData)

            
            
            
          }}
        >
          <Form>
            <div>
              <div className='d-flex form-group align-items-center mt-3'>

                <label className='form-label  user-profile-label' htmlFor='firstName'>First Name : </label>
                <div>
                  <div className='user-profile-input'>
                      <Field type={"text"}
                        name="firstName"
                        id="firstName"
                        placeHolder={"Enter First Name"}
                        
                        className="form-control ms-3 input-sm "
                      />
                   </div>
                </div>
                      <div className='text-danger ms-4'><ErrorMessage name="firstName"></ErrorMessage></div>
                </div>
            </div>

            <div>
              <div className='d-flex form-group align-items-center mt-3'>

                <label className='form-label  user-profile-label' htmlFor='firstName'>Last Name : </label>
                <div>
                  <div className='user-profile-input'>
                      <Field type={"text"}
                        name="lastName"
                        id="lastName"
                        placeHolder={"Enter Last Name"}
                        className="form-control ms-3 input-sm "
                      />
                      </div>
                </div>
                      <div className='text-danger ms-4'><ErrorMessage name="lastName"></ErrorMessage></div>
                </div>
            </div>
            

            <div>
              <div className='d-flex form-group align-items-center mt-3'>

                <label className='form-label  user-profile-label' htmlFor='firstName'>Email : </label>
                <div>
                  <div className='user-profile-input'>
                      <Field type={"email"}
                        name="email"
                        id="email"
                        placeHolder={"Enter Email"}
                        className="form-control ms-3 input-sm "
                      />
                      </div>
                </div>
                      <div className='text-danger ms-4'><ErrorMessage name="email"></ErrorMessage></div>
                </div>
            </div>

            <div>
              <div className='d-flex form-group align-items-center mt-3'>

                <label className='form-label  user-profile-label' htmlFor='firstName'>Contact Number : </label>
                <div>
                  <div className='user-profile-input'>
                      <Field type={"number"}
                        name="contactNo"
                        id="contactNo"
                        placeHolder={"Enter Contact Number"}
                        className="form-control ms-3 input-sm "
                      />
                      </div>
                </div>
                      <div className='text-danger ms-4'><ErrorMessage name="contactNo"></ErrorMessage></div>
                </div>
            </div>


            <div>
              <div className='d-flex form-group align-items-center mt-3'>

                <label className='form-label  user-profile-label' htmlFor='firstName'>Role : </label>
                <div>
                  <div className='user-profile-input'>
                      <Field type={"text"}
                        name="role"
                        id="role"
                        placeHolder={"Enter role"}
                        className="form-control ms-3 input-sm "
                      />
                      </div>
                </div>
                      <div className='text-danger ms-4'><ErrorMessage name="role"></ErrorMessage></div>
                </div>
            </div>

            <div>
              <div className='d-flex form-group align-items-center mt-3'>

                <label className='form-label  user-profile-label' htmlFor='firstName'>Allowed Module </label>
                <div>
                  <div className='user-profile-input'>
                      <Field type={"text"}
                        name="allowedModule"
                        id="allowedModule"
                        placeHolder={"Enter allowed module Name"}
                        className="form-control ms-3 input-sm "
                      />
                      </div>
                </div>
                      <div className='text-danger ms-4'><ErrorMessage name="allowedModule"></ErrorMessage></div>
                </div>
            </div>

              
            

            <div className='formSubmission d-flex  mt-4 ms-4 align-items-center justify-content-center'>
              <Button variant="contained" className='ms-4' type={'submit'}>Update</Button>
            </div>


          </Form>

        </Formik>
        <div className='user-profile-image'>
          <img src={userprofileimage} height={400} width={400}/>
        </div>

      </div>


    </React.Fragment>
  )
}

export default UserProfile

