import React from 'react'
import CustomDialog from '../../../common/dialogBox/CustomDialog'
import HorizontalBarGraph from '../graphs/HoriZontalBarGraph'

const CategoriesSplitContent = (props: any) => {
    const { categoriesSplit, setShowCategroySplit, showCategorySplit, title } = props
    const HandleCloase = () => {
        setShowCategroySplit(false)
    }
    return (
        <CustomDialog
            open={showCategorySplit}
            title={title + categoriesSplit?.month}
            width={"500px"}
            onClose={HandleCloase}
            fullWidth={false}

        >
            <HorizontalBarGraph data={categoriesSplit?.data} className={"categoryBarGraph"} />
        </CustomDialog>

    )
}
export default CategoriesSplitContent
