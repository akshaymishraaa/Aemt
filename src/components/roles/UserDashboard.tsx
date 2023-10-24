import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import UserData from "../../constants/UserData.json";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserDetails } from "../actions/actions";
import { Actiontypes } from "../../types/ActionTypes";
        

function UserDashboard() {
  // const [userData, setUserData] = React.useState<any>([]);
  const { userData } = useSelector((state: any) => state.application)
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllUserDetails((data: any) => {
      console.log('16.....', data)
      // setUserData(data);
      dispatch({ type: Actiontypes.GET_ALL_USER_DATA, payload: data })
    }))
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
    <div className="">
      <DataTable 
      value={userData} 
      stripedRows 
      emptyMessage="No users availablre to display."
      tableStyle={{ minWidth: '50rem' }}
      // paginator 
      // rows={5}
      // rowsPerPageOptions={[5, 10, 25, 50]} 
      scrollable scrollHeight="390px"
      >
        <Column field="firstName" header="User Name"></Column>
        <Column field="role" header="Role"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="contactNo" header="Phone Number"></Column>
        <Column body={actionTemplate} header="Actions"></Column>
      </DataTable>
    </div>
  );
}

export default UserDashboard;
