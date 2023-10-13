import React from 'react';
import BarGraph from '../graphs/BarGraph';
const ExpenseGraph = () => {
    return (
        <>
            <div className='col-6 expensesGraphMain'>
                <p className='GrpahHeading'> Expenses Of Acedamic Year</p>
                <div className='w-100 cardsContainer'>
                    <div className='detailsCard'>Common Card</div>
                    <div className='detailsCard'>Common Card</div>
                    <div className='detailsCard'>Common Card</div>
                </div>
                <BarGraph />
            </div>
        </>
    )
}
export default ExpenseGraph