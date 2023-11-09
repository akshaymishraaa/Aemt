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
  // const featuresList = [{ featureName: 'Student Details', description: 'To access student related details' },
  // { featureName: 'Add Old Student Data', description: 'To add old student details' },
  // { featureName: 'Old Student Payment', description: 'setup old students payment mode' }, { featureName: 'Certificates', description: 'To access certificates and TC' }, { featureName: 'Transportation', description: 'To access Transport services details' }, { featureName: 'Inventory', description: 'To access inventory details of Uniforms,books and stationaries' }]
  return (
    <Routes>
      <Route path='/' element={<StudentSubTabs />}> </Route>
      <Route path='addStudent' element={<AddEditNewStudentDetails />} />
    </Routes>

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