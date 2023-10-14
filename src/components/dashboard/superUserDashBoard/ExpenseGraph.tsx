import React, { useState } from 'react';
import BarGraph from '../graphs/BarGraph';
import ExpensesDetails from '../../../constant/graphsjson/expenses.json';
import CustomDialog from '../../../common/dialogBox/CustomDialog';
import CategoriesSplitContent from './CategoriesSplitContent';
const ExpenseGraph = () => {
    const [showCategorySplit, setShowCategroySplit] = useState<boolean>(false)
    const [categoriesSplit, setCategoriesSplit] = useState<{ data: {}, month: string }>({ data: {}, month: "" })

    var MothCategories: string[] = []
    var expenses: number[] = []
    ExpensesDetails?.map((item: any, index: number) => {
        MothCategories.push(item?.monthExpen?.name)
        expenses.push(item?.monthExpen?.value)

    })


    const HandleClick = (props: any) => {
        setShowCategroySplit(true)
        console.log(props?.dataIndex, ExpensesDetails[props?.dataIndex])
        setCategoriesSplit({ ...categoriesSplit, data: ExpensesDetails[props?.dataIndex]?.catogorySplit, month: ExpensesDetails[props?.dataIndex]?.monthExpen?.name })
    }
    console.log(categoriesSplit, "24.....")
    return (
        <>
            <div className='col-6 barGraphMain expensesStats'>
                <p className='GrpahHeading'> Expenses Of Acedamic Year</p>
                <div className='w-100 cardsContainer'>
                    <div className='detailsCard'>Common Card</div>
                    <div className='detailsCard'>Common Card</div>
                    <div className='detailsCard'>Common Card</div>
                </div>
                <BarGraph handleBarClick={HandleClick} barData={{ categories: MothCategories, values: expenses }} customOptions={{ color: "#f01d0a", labelColor: "#f7f7f7" }} title={"Monthly Expenses Details"} />
                {/* <div className='overlay'> OverLay</div> */}
            </div>
            {
                (showCategorySplit) ?
                    < CategoriesSplitContent categoriesSplit={categoriesSplit} setShowCategroySplit={setShowCategroySplit} showCategorySplit={showCategorySplit} title={'Catogory Wise Expenditure Of Month :'}/> : null

            }
        </>
    )
}
export default ExpenseGraph