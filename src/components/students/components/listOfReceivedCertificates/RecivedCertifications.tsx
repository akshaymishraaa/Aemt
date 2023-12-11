import React, { useState } from 'react'
import ListAltIcon from '@mui/icons-material/ListAlt';
import CustomDialog from '../../../../common/dialogBox/CustomDialog';
const RecievedCertificationsList=(props:any)=>{
    const { Data, setAnchorEl }=props
    const [open,setOpen]=useState(false)

    const openCertificatesList=()=>{
        setOpen(true)
    }

    const onClose=()=>{
        setOpen(false)
        setAnchorEl(null)
    }
    console.log("Recived", Data)
    return(
        <>
            <div className='d-flex' onClick={openCertificatesList}>
                <ListAltIcon className='mx-2' />
                <p>List Of Certicates</p>
            </div>
            <CustomDialog
                title={"Recived Cerficates List Of Student"}
                open={open}
                onClose={onClose}
                actionType={"Submit"}
                maxWidth="md"
                fullWidth={true}
                form={"Certifcates List"}
                onSubmitHandler={() => { }}
            >
            <p>Received CerfiCates List</p>

            </CustomDialog>
        </>
    )
}
export default RecievedCertificationsList