import React, { useEffect } from 'react'
import BarGraph from '../graphs/BarGraph'
import ExpenseGraph from './ExpenseGraph'
import IncomeGraph from './IncomesGraph'
import CustomDialog from '../../../common/dialogBox/CustomDialog'
import { useDispatch } from 'react-redux'
import { getCities, getCountries, getStates } from '../../actions/actions'

const SuperUserDashBoard = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCountries())
    dispatch(getStates({ countryId: '101' }))
    dispatch(getCities({state_Id: '5' }))
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
