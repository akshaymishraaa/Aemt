import React, { useState } from 'react'
import ListAltIcon from '@mui/icons-material/ListAlt';
import CustomDialog from '../../../../common/dialogBox/CustomDialog';
const RecievedCertificationsList=(props:any)=>{
    const { Data}=props
    const [open,setOpen]=useState(true)

    const openCertificatesList=()=>{
        setOpen(true)
    }

    const onClose=()=>{
        setOpen(false)
    }
    console.log("Recived", Data)
    return(
        <>
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