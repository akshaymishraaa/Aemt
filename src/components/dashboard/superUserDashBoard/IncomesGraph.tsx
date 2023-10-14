import React, { useState } from 'react';
import BarGraph from '../graphs/BarGraph';
import incomegraph from '../../../constant/graphsjson/icomegraph.json'
import CustomDialog from '../../../common/dialogBox/CustomDialog';
import CategoriesSplitContent from './CategoriesSplitContent';
const IncomeGraph = () => {
    const [showCategorySplit, setShowCategroySplit] = useState(false)
    const [categoriesSplit, setCategoriesSplit] = useState<{ data: {}, month: string }>({ data: {}, month: "" })
    var MothCategories: string[] = []
    var income: number[] = []
    incomegraph?.map((item: any, index: number) => {
        MothCategories.push(item?.month?.name)
        income.push(item?.month?.Income)

    })


    const HandleClick = (props: any) => {
        setShowCategroySplit(true)
        console.log(props?.dataIndex, incomegraph[props?.dataIndex])
        setCategoriesSplit({ ...categoriesSplit, data: incomegraph[props?.dataIndex]?.catagorySplit, month: incomegraph[props?.dataIndex]?.month?.name })
    }

    return (
        <>
            <div className='col-6 barGraphMain incomestats'>
                <p className='GrpahHeading'> Income Of Acedamic Year</p>
                <div className='w-100 cardsContainer'>
                    <div className='detailsCard'>
                        <span>Major Income Generated From:</span>
                    </div>
                    <div className='detailsCard'>
                        <span>Total Income Generated :</span>
                    </div>
                    <div className='detailsCard'>
                        <span>Highest Income Rate And Month :</span>
                    </div>
                </div>
                <BarGraph handleBarClick={HandleClick} barData={{ categories: MothCategories, values: income }} customOptions={{ color: "#0af011", labelColor: "#262120" }} title={"Monthly Expenses Details"} />
            </div>
            {
                (showCategorySplit) ?
                    < CategoriesSplitContent categoriesSplit={categoriesSplit} setShowCategroySplit={setShowCategroySplit} showCategorySplit={showCategorySplit} title={'Income Generated From Each Class in :'} /> : null

            }
        </>
    )
}
export default IncomeGraph 
