import React, { useState } from 'react';
import BarGraph from '../graphs/BarGraph';
import ExpensesDetails from '../../../constant/graphsjson/expenses.json';
import CustomDialog from '../../../common/dialogBox/CustomDialog';
const ExpenseGraph = () => {
    const [showCategorySplit, setShowCategroySplit] = useState(false)
    const [categoriesSplit, setCategoriesSplit] = useState({})

    var MothCategories: string[] = []
    var expenses: number[] = []
    ExpensesDetails?.map((item: any, index: number) => {
        MothCategories.push(item?.monthExpen?.name)
        expenses.push(item?.monthExpen?.value)

    })


    const HandleClick = (props: any) => {
        setShowCategroySplit(true)
        console.log(props?.dataIndex, ExpensesDetails[props?.dataIndex])
        setCategoriesSplit(ExpensesDetails[props?.dataIndex]?.catogorySplit)
    }

    return (
        <>
            <div className='col-6 expensesGraphMain'>
                <p className='GrpahHeading'> Expenses Of Acedamic Year</p>
                <div className='w-100 cardsContainer'>
                    <div className='detailsCard'>Common Card</div>
                    <div className='detailsCard'>Common Card</div>
                    <div className='detailsCard'>Common Card</div>
                </div>
                <BarGraph handleBarClick={HandleClick} barData={{ categories: MothCategories, values: expenses }} title={"Monthly Expenses Details"} />
            </div>
            {
                (showCategorySplit) ? <CustomDialog
                    open={showCategorySplit}
                    setShowCategroySplit={setShowCategroySplit}
                    title={'Catogory Wise Expenditure Of Month:'}
                    data={categoriesSplit}
                    width={"500px"}
                >
                    <p>Expenditure of Every Category </p>
                </CustomDialog> : null
            }
        </>
    )
}
export default ExpenseGraph