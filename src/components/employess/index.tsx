import React from "react";
import EmployeesDashboard from "./EmployeesDashboard";
import CommonCard from "../../common/CommonCard";
import CommonSearchField from "../../common/CommonSearchField";

export default function Employees() {
  return (
    <div>
    <CommonCard title={"Employees"}>
    <div className='d-flex justify-content-end'>
            <CommonSearchField placeholder={'Search employees here...'} />
    </div>
      <EmployeesDashboard />
    </CommonCard>
    </div>
  );
}
