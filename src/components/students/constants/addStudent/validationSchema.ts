import * as Yup from 'yup'
export const validateAdmissionForm = Yup.object().shape({
    studentInfo: Yup.object().shape({
        studentFullName: Yup.string().required('Please Enter Full Name'),
        dateOfBirth: Yup.string().required('Please Select Date OF Birth'),
        adharNumber: Yup.string().required('Please Enter Aadhar Number'),
        categorgy: Yup.string().required('Please Select Category'),
        dateOfAdmission: Yup.string().required('Please Select Date Of Joining'),
        classJoining: Yup.string().required('Please Select Class Of Joining'),
        gender: Yup.string().required('Please Select Gender')

    }),
    parentsInfo: Yup.object().shape({
        fatherName: Yup.string().required('Please Enter Father Name'),
        fatherOccupation: Yup.string().required('Please Enter Father Occupation'),
        fatherHigherEducation: Yup.string().required('Please Enter Father Qualification'),
        motherName: Yup.string().required('Please Enter Mother Name'),
        motherOccupation: Yup.string().required('Please Enter Mother Occupation'),
        motherHigherEducation: Yup.string().required('Please Enter Mother Qualification'),
        primaryConactNumber: Yup.string().required('Please Enter PrimaryContact'),
        localAddress: Yup.string().required('Please Enter LoacalAddress'),
        PermenantAddress: Yup.string().required('Please Enter Permenanant Address'),
        emailId: Yup.string().required('Please Enter EmailId').email('Invalid Email')

    }),
    others:Yup.object().shape({
        transportationMode: Yup.string().required('Please Select Transportation Mode.')

    })

})