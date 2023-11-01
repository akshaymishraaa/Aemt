import { studentAdmissionFrom } from "./AddStudentTypes"
export const studentAdmissionDetails: studentAdmissionFrom = {
    studentInfo: {
        studentFullName: undefined,
        dateOfBirth: null,
        gender: '',
        adharNumber: '',
        categorgy: '',
        classJoining: '',
        dateOfAdmission: null,
        emailId: '',
        contactNumber: ''
    },
    parentsInfo: {
        fatherName: undefined,
        fatherOccupation: undefined,
        fatherHigherEducation: undefined,
        motherName: undefined,
        motherOccupation: undefined,
        motherHigherEducation: undefined,
        localGurdian: undefined,
        gurdianContactNumber: ' ',
        primaryConactNumber: ' ',
        localAddress: undefined,
        PermenantAddress: undefined,
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