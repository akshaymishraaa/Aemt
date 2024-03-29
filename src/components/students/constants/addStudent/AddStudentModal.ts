import { studentAdmissionFrom } from "./AddStudentTypes"
export const studentAdmissionDetails: studentAdmissionFrom =
 [
    {

        studentInfo: {
            studentFullName: undefined,
            dateOfBirth: '',
            gender: '',
        adharNumber: '',
        categorgy: '',
        classJoining: '',
        dateOfAdmission: '',
        emailId: '',
        contactNumber: '',
        studentProfile: '',
        MotherTongue: undefined,
        religion: undefined,
        bloodGroup: '',
        birthCertificate: '',
        studentType: "NEW"
        
    },
},
{

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
        emailId: '',
        familyYearlyIcome: '',
        gurdianProfile: ''


    },
},
{
    
    previousAcademicDetails: {
        lastClassDetails: undefined,
        schoolName: undefined,
        lastAcedamicPercentage: undefined,
        transferCertificate: ''
    },
},
{

    others:
    {
        transportationMode: undefined,
       
    }
}

]