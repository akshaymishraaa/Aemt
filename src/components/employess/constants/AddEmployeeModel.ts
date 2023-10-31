import { addEmployeeDataType } from "./AddEmployeeDataType"
export const addEmployeeModel : addEmployeeDataType ={
    personalDetails: {
        name: "",
        adharNo: "",
        panNo: "",
        email: "",
        phone: "",
        permanentAddress: "",
        localAddress: "",
        joiningData: "",
        employeementType: "",
        department: "",
        gender: "",
        maritalStatus: "",
        designation: "",
        dateOfBirth: "",
      },
      bankAccountDetails: {
        accountNo: "",
        branchName: "",
        ifscCode: "",
        previousOrganization: "",
        previousSalary: "",
        paymentMethod: "",
        payslips: "",
        totalExperience: "",
      },
}