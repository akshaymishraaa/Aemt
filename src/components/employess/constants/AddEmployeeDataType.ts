export type addEmployeeDataType = {
  personalDetails: {
    name: string;
    adharNo: string;
    panNo: string;
    email: string;
    phone: string;
    permanentAddress: string;
    localAddress: string;
    joiningData: string;
    employeementType: string;
    department: string;
    gender: string;
    maritalStatus: string;
    designation: string;
    dateOfBirth: string;
  };
  bankAccountDetails: {
    accountNo: string;
    branchName: string;
    ifscCode: string;
    previousOrganization: string;
    previousSalary: string;
    paymentMethod: string;
    payslips: string;
    totalExperience: any;
  };
};
