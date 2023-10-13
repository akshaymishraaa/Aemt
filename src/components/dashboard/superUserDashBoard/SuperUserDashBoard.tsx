import React from 'react'
import BarGraph from '../graphs/BarGraph'
import ExpenseGraph from './ExpenseGraph'

const SuperUserDashBoard = () => {
  return (
    <div className='col-12 d-flex graphsContainer' >
      <ExpenseGraph />
      <ExpenseGraph />

    </div>
  )
}
export default SuperUserDashBoard
