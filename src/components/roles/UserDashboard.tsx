import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import UserData from "../../constants/UserData.json";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function UserDashboard() {
  const [userData, setUserData] = React.useState<any>([]);
  React.useEffect(() => {
    setUserData(UserData);
  }, []);

  const actionTemplate = () => {
    return (
      <>
        <EditIcon />
        <DeleteIcon />
      </>
    );
  };

  return (
    <div className="card">
      <DataTable value={userData} tableStyle={{ minWidth: "50rem" }}>
        <Column field="name" header="User Name"></Column>
        <Column field="role" header="Role"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="phone" header="Phone Number"></Column>
        <Column body={actionTemplate} header="Actions"></Column>
      </DataTable>
    </div>
  );
}

export default UserDashboard;
