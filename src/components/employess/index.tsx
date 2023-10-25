import React from "react";
import EmployeesDashboard from "./EmployeesDashboard";
import CommonCard from "../../common/CommonCard";

export default function Employees() {
  return (
    <CommonCard title={"Employees"}>
      <EmployeesDashboard />
    </CommonCard>
  );
}
