import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import UserData from "../../constants/UserData.json";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserDetails } from "../actions/actions";
import { Actiontypes } from "../../types/ActionTypes";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

        

function UserDashboard() {
  // const [userData, setUserData] = React.useState<any>([]);
  const { userData } = useSelector((state: any) => state.application)
  const dispatch = useDispatch();
  const navigate=useNavigate()
  React.useEffect(() => {
    dispatch(getAllUserDetails((data: any) => {
      console.log('16.....', data)
      // setUserData(data);
      dispatch({ type: Actiontypes.GET_ALL_USER_DATA, payload: data })
    }))
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const editUser=()=>{
    return(
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    )
  }
  const actionTemplate = () => {
    return (
      <>
        <span onClick={handleClickOpen}><EditIcon /></span>
        |  &nbsp;
        <DeleteIcon />
      </>
    );
  };

  return (
    <div className="">
      <DataTable 
      value={userData} 
      stripedRows 
      emptyMessage="No users available to display."
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
