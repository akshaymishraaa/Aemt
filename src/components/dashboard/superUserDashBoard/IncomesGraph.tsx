import React, { useState } from 'react';
import BarGraph from '../graphs/BarGraph';
import icomegraph from '../../../constant/graphsjson/icomegraph.json'
import CustomDialog from '../../../common/dialogBox/CustomDialog';
const IncomeGraph = () => {
    const [showCategorySplit, setShowCategroySplit] = useState(false)
    const [categoriesSplit, setCategoriesSplit] = useState({})

    var MothCategories: string[] = []
    var income: number[] = []
    icomegraph?.map((item: any, index: number) => {
        MothCategories.push(item?.month?.name)
        income.push(item?.month?.Income)

    })


    const HandleClick = (props: any) => {
        setShowCategroySplit(true)
        console.log(props?.dataIndex, icomegraph[props?.dataIndex])
        setCategoriesSplit(icomegraph[props?.dataIndex]?.catagorySplit)
    }

    return (
        <>
            <div className='col-6 barGraphMain incomestats'>
                <p className='GrpahHeading'> Income Of Acedamic Year</p>
                <div className='w-100 cardsContainer'>
                    <div className='detailsCard'>Common Card</div>
                    <div className='detailsCard'>Common Card</div>
                    <div className='detailsCard'>Common Card</div>
                </div>
                <BarGraph handleBarClick={HandleClick} barData={{ categories: MothCategories, values: income }} customOptions={{ color: "#0af011", labelColor: "#262120" }} title={"Monthly Expenses Details"} />
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
export default IncomeGraph 
