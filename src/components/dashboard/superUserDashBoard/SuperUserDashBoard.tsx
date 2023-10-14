import React from 'react'
import BarGraph from '../graphs/BarGraph'
import ExpenseGraph from './ExpenseGraph'
import IncomeGraph from './IncomesGraph'

const SuperUserDashBoard = () => {
  return (
    <div className='col-12 d-flex graphsContainer' >
      <ExpenseGraph />
      <IncomeGraph />

    </div>
  )
}
export default SuperUserDashBoard
