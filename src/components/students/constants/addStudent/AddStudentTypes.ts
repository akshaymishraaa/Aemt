export type studentAdmissionFrom = {
    studentInfo: {
        studentFullName: String | undefined,
        dateOfBirth: String | null,
        gender: String,
        adharNumber: String,
        categorgy: String,
        classJoining: String,
        dateOfAdmission: String | null,
        emailId: String,
        contactNumber: String,
        bloodGroup: String,
        religion: String | undefined,
        birthCertificate: String | null,
        studentProfile: String,
        MotherTongue: String | undefined

    },
    parentsInfo: {
        fatherName: String | undefined,
        fatherOccupation: String | undefined,
        fatherHigherEducation: String | undefined
        motherName: String | undefined,
        motherOccupation: String | undefined,
        motherHigherEducation: String | undefined,
        localGurdian: String | undefined,
        gurdianContactNumber: String | undefined,
        primaryConactNumber: String,
        localAddress: String | undefined,
        PermenantAddress: String | undefined,
        emailId: String,
        familyYearlyIcome: Number | null,
        gurdianProfile: String
    },
    previousAcademicDetails: {
        lastClassDetails: String | undefined,
        schoolName: String | undefined,
        lastAcedamicPercentage: String | undefined,
        transferCertificate: String | undefined
    },
    others:
    {
        transportationMode: String | undefined,
        studentType: String
    }
}