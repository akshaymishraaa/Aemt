import React from 'react'
import CommonCard from '../../common/CommonCard'
import './styles/Styles.scss';
import StudentDetails from './components/StudentDetails';
import CommonSearchField from '../../common/CommonSearchField';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import AddEditNewStudentDetails from './components/addStudentDetails/AddEditNewStudent';
import StudentSubTabs from './components/Index';

function Students() {
  const navigate = useNavigate()


  return (
    <>
      <Routes>
        <Route path='/' element={<StudentDetails />}> </Route>
        <Route path='addStudent' element={<AddEditNewStudentDetails />} />
      </Routes>
    </>

  )
}
{/* <CommonCard title={'Students'}>
        <div>
          <div className='d-flex justify-content-end'>
            <CommonSearchField placeholder={'Search students here...'} />
            <button className='btn btn-primary p-1 m-3' onClick={(e: any) => { navigate('./AddnewStudent') }}  >Add New Student Details</button>
          </div>
          <StudentDetails />
        </div>
      </CommonCard>
    </div> */}

export default Students