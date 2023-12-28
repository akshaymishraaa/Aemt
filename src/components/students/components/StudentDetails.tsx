
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from 'react-router-dom';
import CommonCard from '../../../common/CommonCard';
import CommonSearchField from '../../../common/CommonSearchField';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../styles/Styles.scss'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function StudentDetails() {

    const navigate = useNavigate()

    const studentData: any = [
        { id: 'STX1', studentName: 'Amar pratap', rollNo: 12, class: '10th', section: 'D', parentContact: 99858348484 },
        { id: 'STX2', studentName: 'Akshay', rollNo: 2, class: '10th', section: 'A', parentContact: 99858348484 },
        { id: 'STX12', studentName: 'Jack', rollNo: 3, class: '10th', section: 'B', parentContact: 99858348484 },
        { id: 'STX8', studentName: 'Prashant', rollNo: 13, class: '10th', section: 'C', parentContact: 99858348484 },
        { id: 'STX5', studentName: 'Ram', rollNo: 1, class: '10th', section: 'A', parentContact: 99858348484 },
        { id: 'STX3', studentName: 'Robert', rollNo: 6, class: '10th', section: 'D', parentContact: 99858348484 },

    ]


    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 200,
        
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const actionBody = (rowData: any) => {
        return (
            <React.Fragment>
                <div>
                    <DeleteIcon /> |  &nbsp;
                    <EditIcon />   |  &nbsp;
                    <span onClick={handleOpen}><MoreVertIcon /></span>
                    
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>


                </div>
            </React.Fragment>
        )
    }
    const stdIdTemplate = (rowData: any) => {
        return <React.Fragment>
            <div>
                <Link to={''}>{rowData.id}</Link>
            </div>
        </React.Fragment>
    }


    return (
        <CommonCard title={'Students'}>
            <div>
                <div className='d-flex justify-content-end'>
                    <CommonSearchField placeholder={'Search students here...'} />
                    <button className='btn btn-primary p-1 m-3' onClick={(e: any) => { navigate('./addStudent') }}  >Add New Student Details</button>
                </div>


                <div className="card p-4">
                    <DataTable value={studentData}
                        showGridlines
                        stripedRows
                    // tableStyle={{ minWidth: '50rem' }}
                    >
                        <Column body={stdIdTemplate} header={'Student UID'} />
                        <Column field={'studentName'} header={'Student name'} />
                        <Column field={'rollNo'} header={'Roll no'} />
                        <Column field={'class'} header={'Class'} />
                        <Column field={'section'} header={'Section'} />
                        <Column field={'parentContact'} header={'Parent contact'} />
                        <Column body={actionBody} header={'Actions'} />
                    </DataTable>

                </div>

            </div>
        </CommonCard>


    );
}