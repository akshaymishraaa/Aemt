export type studentAdmissionFrom = {
    studentInfo: {
        studentFullName: string | undefined,
        dateOfBirth: String | null,
        gender: string,
        adharNumber: string,
        categorgy: string,
        classJoining: String,
        dateOfAdmission: string |null,
        emailId: string,
        contactNumber: string
    },
    parentsInfo: {
        fatherName: string | undefined,
        fatherOccupation: string | undefined,
        fatherHigherEducation: string | undefined
        motherName: string | undefined,
        motherOccupation: string | undefined,
        motherHigherEducation: string | undefined,
        localGurdian: string | undefined,
        gurdianContactNumber: string | undefined,
        primaryConactNumber: string,
        localAddress: string | undefined,
        PermenantAddress: string | undefined,
        emailId: string
    },
    previousAcademicDetails: {
        lastClassDetails: string,
        schoolName: string,
        lastAcedamicPercentage: string,
        transferCertificate: string
    },
    others:
    {
        transportationMode: string,
        paymentOptions: string
    }
}