
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

    const actionBody = (rowData: any) => {
        return (
            <React.Fragment>
                <div>
                    <DeleteIcon /> |  &nbsp;
                    <EditIcon />   |  &nbsp;
                    <span><MoreVertIcon/></span>
                    

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