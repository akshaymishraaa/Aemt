import { studentAdmissionDetails } from "../constants/addStudent/AddStudentModal";
import { studentTypes } from "./types";

const intialState = {
    studenAdmissiontData: studentAdmissionDetails,
    formsSubmisionSteps: [{ name: 'studentInfo', stepNo: 0, submited: false }, { name: 'parentsInfo', stepNo: 1, submited: false }, { name: 'previousAcademicDetails', stepNo: 2, submited: false }, { name: 'others', stepNo: 3, submited: false }]


}
export const StudentMiddleWare = (state: any = intialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case studentTypes.ADD_EDIT_STUDENT_ADMISSIONDETAILS:
            return { ...state, studenAdmissiontData: action.payload }
        case studentTypes.ADMISSION_STEPS:
            return { ...state, formsSubmisionSteps :action.payload}
        default: {
            return { ...state }
        }

    }

}