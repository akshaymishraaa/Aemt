import { studentAdmissionFrom } from "./AddStudentTypes"
export const studentAdmissionDetails: studentAdmissionFrom = {
    studentInfo: {
        studentFullName: undefined,
        dateOfBirth: '',
        gender: '',
        adharNumber: '',
        categorgy: '',
        classJoining: '',
        dateOfAdmission: '',
        emailId: '',
        contactNumber: ''
    },
    parentsInfo: {
        fatherName: undefined,
        fatherOccupation: undefined,
        fatherHigherEducation: undefined,
        motherName: ' ',
        motherOccupation: ' ',
        motherHigherEducation: ' ',
        localGurdian: ' ',
        gurdianContactNumber: ' ',
        primaryConactNumber: ' ',
        SecondaryContactNumber: ' ',
        localAddress: ' ',
        PermenantAddres: ' ',
        emailId: ''
    },
    previousAcademicDetails: {
        lastClassDetails: ' ',
        schoolName: ' ',
        lastAcedamicPercentage: ' ',
        transferCertificate: ' '
    },
    others:
    {
        transportationMode: ' ',
        paymentOptions: ' '
    }

}