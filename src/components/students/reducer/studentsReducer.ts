import { studentAdmissionDetails } from "../constants/addStudent/AddStudentModal";
import { studentTypes } from "./types";

const intialState = {
    studentDetails: studentAdmissionDetails
}
export const StudentMiddleWare = (state: any = intialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case studentTypes.ADD_EDIT_STUDENT_ADMISSIONDETAILS:
            return { ...state, studentDetails: action.payload }
        default: {
            return { ...state }
        }

    }

}