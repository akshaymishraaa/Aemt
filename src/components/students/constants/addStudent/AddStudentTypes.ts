export type studentAdmissionFrom = {
    studentInfo: {
        studentFullName: string | undefined,
        dateOfBirth: String,
        gender: string,
        adharNumber: string,
        categorgy: string,
        classJoining: String,
        dateOfAdmission: string,
        emailId: string,
        contactNumber: string
    },
    parentsInfo: {
        fatherName: string | undefined,
        fatherOccupation: string | undefined,
        fatherHigherEducation: string | undefined
        motherName: string,
        motherOccupation: string,
        motherHigherEducation: string,
        localGurdian: string,
        gurdianContactNumber: string,
        primaryConactNumber: string,
        SecondaryContactNumber: string,
        localAddress: string,
        PermenantAddres: string,
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