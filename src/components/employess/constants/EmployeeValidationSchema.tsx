import * as Yup from 'yup';
export const employeeValidationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter name"),
    adharNo: Yup.string().required("Please enter Adhar number"),
    panNo: Yup.string().required("Please enter Pan number"),
    email: Yup.string().required("Please enter email id"),
    phoneNo: Yup.string().required("Please enter phone number"),
    address: Yup.string().required("Please enter address"),
    joiningDate: Yup.string().required("Please enter joining date"),
    employementType: Yup.string().required("Please enter employement type"),
    departant: Yup.string().required("Please enter joining department"),
    gender: Yup.string().required("Please enter joining gender"),
    maritalstatus: Yup.string().required("Please enter marital status"),
    designation: Yup.string().required("Please enter designation"),
    dateOfBirth: Yup.string().required("Please enter date of birth"),
    accountNo: Yup.string().required('Please enter account number'),
    branchName: Yup.string().required("Please enter branch name"),
    ifsc: Yup.string().required("Please enter IFSC code"),
    totalExperience: Yup.string().required("Please enter total experience"),
})