import React, { useState } from 'react'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import CustomDialog from '../../../../common/dialogBox/CustomDialog';
const StudentFeeDetails=(props:any)=>{
    const { Data, setAnchorEl } = props
    const [open, setOpen] = useState(true)

    const openFeeRecord = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }
    return(
        <>
          
            <CustomDialog
                title={"Student Fee Record"}
                open={open}
                onClose={onClose}
                actionType={"Submit"}
                maxWidth="md"
                fullWidth={true}
                form={"Student Fee Record"}
                onSubmitHandler={() => { }}
            >
                <p>Student Fee Record</p>

            </CustomDialog>
        </>
    )
}
export default StudentFeeDetails