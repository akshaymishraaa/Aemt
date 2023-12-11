import React, { useState } from 'react'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CustomDialog from '../../../../common/dialogBox/CustomDialog';

export default function CertificationIndex(props: any) {
  const { Data, setAnchorEl } = props
  const [open, setOpen] = useState(false)

  const openCertificateGenratoe = () => {
    setOpen(true)
  }

  const onClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }
  return (
    <>
    <div className='d-flex' onClick={openCertificateGenratoe}>
      <ReceiptLongIcon className='mx-2' />
      <p> Generate/IssueCertificate</p>
    </div>
     <CustomDialog
        title={"Generate/IssueCertificate"}
        open={open}
        onClose={onClose}
        actionType={"Submit"}
        maxWidth="md"
        fullWidth={true}
        form={"Generate IssueCertificate"}
        onSubmitHandler={() => { }}
        >
        <p>Generate/IssueCertificate</p>

      </CustomDialog>
        </>
  )
}
