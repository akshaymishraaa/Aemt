import React from 'react'
import CustomDialog from '../../../common/dialogBox/CustomDialog'
import HorizontalBarGraph from '../graphs/HoriZontalBarGraph'

const CategoriesSplitContent = (props: any) => {
    const { categoriesSplit, setShowCategroySplit, showCategorySplit, title } = props
    return (
        <CustomDialog
            open={showCategorySplit}
            setShowCategroySplit={setShowCategroySplit}
            title={title + categoriesSplit?.month}
            width={"500px"}

        >
            <HorizontalBarGraph data={categoriesSplit?.data} className={"categoryBarGraph"} />
        </CustomDialog>

    )
}
export default CategoriesSplitContent
