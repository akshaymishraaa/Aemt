import React, { useEffect } from 'react'
import BarGraph from '../graphs/BarGraph'
import ExpenseGraph from './ExpenseGraph'
import IncomeGraph from './IncomesGraph'
import CustomDialog from '../../../common/dialogBox/CustomDialog'
import { useDispatch, useSelector } from 'react-redux'
import {  findUserById, getCities, getCountries, getStates } from '../../actions/actions'

const SuperUserDashBoard = () => {

  const { userDetails } = useSelector((state: any) => state.application)
  console.log('12....',userDetails)
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(findUserById(userDetails.id))
    dispatch(getCountries())
    dispatch(getStates({ countryId: '101' }))
    dispatch(getCities({ state_Id: '5' }))
  }, [])
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
