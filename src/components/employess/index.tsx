import React from "react";
import CommonCard from "../../common/CommonCard";
import CommonSearchField from "../../common/CommonSearchField";
import EmployeesDashboard from "./components/EmployeesDashboard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Employees() {
  const navigate = useNavigate()
  return (
    <div>
      <CommonCard title={"Employees"}>
        <div className='d-flex justify-content-end'>
          <CommonSearchField placeholder={'Search employees here...'} />
          <button className='btn btn-primary p-2 m-3' onClick={(e: any) => { navigate('/employee/addEmployee') }}>Add New Employee</button>
        </div>
        <EmployeesDashboard />
      </CommonCard>
    </div>
  );
}
