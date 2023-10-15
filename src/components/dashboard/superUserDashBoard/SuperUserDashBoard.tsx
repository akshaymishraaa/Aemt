import React from 'react'
import BarGraph from '../graphs/BarGraph'
import ExpenseGraph from './ExpenseGraph'
import IncomeGraph from './IncomesGraph'
import CustomDialog from '../../../common/dialogBox/CustomDialog'

const SuperUserDashBoard = () => {
  return (
    <div className='dashboardMain row'>

      <div className='col-12 d-flex graphsContainer' >
        <ExpenseGraph />
        <IncomeGraph />
      </div>
      <div className='col-12'>
        <CustomDialog />
      </div>
    </div>
  )
}
export default SuperUserDashBoard
