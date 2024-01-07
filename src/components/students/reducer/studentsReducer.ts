import { studentAdmissionDetails } from "../constants/addStudent/AddStudentModal";
import { ValidateOthers, validateParentsInfo, validatePreviousAcedemicDetails, validateStudentInfo } from "../constants/addStudent/validationSchema";
import { studentTypes } from "./types";

const intialState = {
    studenAdmissiontData: studentAdmissionDetails,
    formsSubmisionSteps: [
        { name: 'studentInfo', stepNo: 0, submited: null, validate: validateStudentInfo, values: studentAdmissionDetails[0] }
        , { name: 'parentsInfo', stepNo: 1, submited: null, validate: validateParentsInfo, values: studentAdmissionDetails[1] },
        { name: 'previousAcademicDetails', stepNo: 2, submited: null, validate: validatePreviousAcedemicDetails, values: null },
        { name: 'others', stepNo: 3, submited: null, validate: ValidateOthers, values: null }]


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