import { studentAdmissionDetails } from "../constants/addStudent/AddStudentModal";
import { ValidateOthers, validateParentsInfo, validateStudentInfo } from "../constants/addStudent/validationSchema";
import { studentTypes } from "./types";

const intialState = {
    studenAdmissiontData: studentAdmissionDetails,
    formsSubmisionSteps: [
        { name: 'studentInfo', stepNo: 0, submited: null, validate: validateStudentInfo }
        , { name: 'parentsInfo', stepNo: 1, submited: null, validate: validateParentsInfo },
        { name: 'previousAcademicDetails', stepNo: 2, submited: null, validate: null },
        { name: 'others', stepNo: 3, submited: null, validate: ValidateOthers }]


}
export const StudentMiddleWare = (state: any = intialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case studentTypes.ADD_EDIT_STUDENT_ADMISSIONDETAILS:
            return { ...state, studenAdmissiontData: action.payload }
        case studentTypes.ADMISSION_STEPS:
            return { ...state, formsSubmisionSteps: action.payload }
        default: {
            return { ...state }
        }

    }

}