import React, { useState } from 'react'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CustomDialog from '../../../../common/dialogBox/CustomDialog';

export default function CertificationIndex(props: any) {
  const { Data } = props
  const [open, setOpen] = useState(true)


  const onClose = () => {
    setOpen(false)
  }
  return (
    <>

      <CustomDialog
        title={"Generate/IssueCertificate"}
        open={open}
        onClose={onClose}
        actionType={"Submit"}
        maxWidth="sm"
        fullWidth={true}
        form={"Generate IssueCertificate"}
        onSubmitHandler={() => { }}
      >
        <div>
          <p>Generate Acedemic Certicates</p>
          <p>Issue Certicates</p>
          <p>Extra Circular Certicates</p>
        </div>

      </CustomDialog>
    </>
  )
}
