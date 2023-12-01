import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {EmployeeSData} from '../../../constants/EmployeesData'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function EmployeesDashboard(){
    const actionTemplate = () => {
        return (
          <>
            <EditIcon />|  &nbsp;
            <DeleteIcon />
          </>
        );
      };
    return(
        <div className="">
        <DataTable 
        value={EmployeeSData} 
        stripedRows 
        emptyMessage="No users availablre to display."
        tableStyle={{ minWidth: '50rem' }}
        // paginator 
        // rows={5}
        // rowsPerPageOptions={[5, 10, 25, 50]} 
        scrollable scrollHeight="390px"
        >
          <Column field="id" header="Employees Id"></Column>
          <Column field="employeeName" header="Employee Name"></Column>
          <Column field="email" header="Email"></Column>
          <Column field="phoneNumber" header="Phone Number"></Column>
          <Column field="joiningDate" header="Joining Date"></Column>
          <Column field="salary" header="Salary"></Column>
          <Column body={actionTemplate} header="Actions"></Column>
        </DataTable>
      </div>
    )
}