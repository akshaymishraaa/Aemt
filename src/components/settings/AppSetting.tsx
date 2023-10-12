import React from 'react'
import CommonCard from '../../common/CommonCard';
import TextField from '@mui/material/TextField';

function AppSetting() {
  return (
    <div>
      <CommonCard title={'Application setting'}>
        <div className='row'>
          <div className='col-6 p-4 d-block'>
            <TextField id="outlined-basic" label="Organization name" variant="outlined" className='m-1' />
            <TextField id="outlined-basic" label="Organization name" variant="outlined" className='m-1' />
            <TextField type={'file'} id="outlined-basic" variant="outlined" className='m-1' />
          </div>
          <div className='col-6'>
           column 2 
          </div>
        </div>
      </CommonCard>
    </div>
  )
}

export default AppSetting