import * as Yup from 'yup'
export const validateStudentInfo = Yup.object().shape({
    studentInfo: Yup.object().shape({
        studentFullName: Yup.string().required('Please Enter Full Name'),
        // dateOfBirth: Yup.string().required('Please Select Date OF Birth'),
        adharNumber: Yup.string().required('Please Enter Aadhar Number'),
        categorgy: Yup.string().required('Please Select Category'),
        // dateOfAdmission: Yup.string().required('Please Select Date Of Joining'),
        classJoining: Yup.string().required('Please Select Class Of Joining'),
        gender: Yup.string().required('Please Select Gender')

    })
})
export const validateParentsInfo = Yup.object().shape({
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

    })
})
export const ValidateOthers = Yup.object().shape({
    others: Yup.object().shape({
        transportationMode: Yup.string().required('Please Select Transportation Mode.')

    })
})
export const validatePreviousAcedemicDetails = Yup.object().shape({
    previousAcademicDetails: Yup.object().shape({
        schoolName: Yup.string().required('Enter School Name Or N/A'),
        lastAcedamicPercentage: Yup.string().required('Enter last percentage or N/A'),
        lastClassDetails: Yup.string().required('Last Class Completed or N/A')
    })

})