import React, { useState } from 'react'
import CommonCard from '../../common/CommonCard';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import { useSelector } from 'react-redux';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function AppSetting() {
  const { roles } = useSelector((state: any) => state.application);
  const [personName, setPersonName] = React.useState<string[]>([]);
  
  const[formData,setFormData]=useState({
      organiZationName:'',
    organisationType:'',
    organisationDetails:'',
    notificationPermission:[],
    primaryColor:'',
    secondaryColor:"",
    accentColor:'',
    headerColor:'',
   backgroundColor:""

 
  })

  function handleInputChange(e:any){
    setFormData((prevValue)=>{
     const {name,value,checked,type}=e.target;
     return {
         ...prevValue,[name]:type==="checkbox"?checked:value
     }
    })
 }


  const navigate = useNavigate()

  // const handleChange = (event: SelectChangeEvent<typeof personName>) => {
  //   const {target: { value },} = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === 'string' ? value.split(',') : value,
  //   );
  // };
  const handleSubmit = () => {
    console.log(formData)
   // navigate('/home')
  }
  return (
    <div>
      <CommonCard title={'Application setting'}>
        <div className='row App-setting-container'>
          <div className='col-6 org-details-section'>
            <div className="form-group mt-2">
              <label>Organization Name</label>
              <input type="text" className="form-control w-75" name='organiZationName' onChange={handleInputChange} id="formGroupExampleInput" placeholder="Organization name" />
            </div>
            <div className="form-group mt-2">
              <label >Organization type</label>
              <input type="text" className="form-control w-75" name='organisationType' onChange={handleInputChange}  id="formGroupExampleInput2" placeholder="Organization Type" />
            </div>
            <div className="form-group mt-2">
              <label >Organization Logo</label>
              <input type="file" className="form-control w-75" id="formGroupExampleInput2" />
            </div>
            <div className="form-group mt-2">
              <label >Organization Details</label>
              <input type="textarea" className="form-control w-75" name='organisationDetails'  onChange={handleInputChange}  id="formGroupExampleInput2" placeholder="Organization Type" />
            </div>
            <div className="form-group mt-2">
              <Tooltip title="Notification permission as per role">
                <label >Notification permission</label>
              </Tooltip><br />
              <FormControl sx={{ m: 1 }} className='w-75'>
                {/* <InputLabel id="demo-multiple-name-label">Permission</InputLabel> */}
                <Select
                  labelId="demo-multiple-name-label"
                  id="notificationPermission" 
                  multiple
                  value={personName}
                  onChange={handleInputChange}
                  input={<OutlinedInput />}
                  MenuProps={MenuProps}
                  placeholder='Select roles'
                  renderValue={(selected) => selected.join(', ')}
                  sx={{ height: '2.5rem', border: 'none !important' }}
                >
                  {roles.map((role: any) => (
                    <MenuItem
                      key={role.roleId}
                      value={role.roleName}
                    // style={getStyles(name, personName, theme)}
                    >
                      <Checkbox checked={personName.indexOf(role.roleName) > -1} /> 
                      {role.roleName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>


            </div>
          </div>
          <div className='col-6'>
            <div className="form-group mt-2">
              <label >Primary color</label>
              <input type="color" name="primaryColor" onChange={handleInputChange} className="form-control w-75" id="formGroupExampleInput2"  />
            </div>
            <div className="form-group mt-2">
              <label >Secondary color</label>
              <input type="color" name="secondaryColor" onChange={handleInputChange} className="form-control w-75" id="formGroupExampleInput2"  />
            </div>
            <div className="form-group mt-2">
              <label >Accent color</label>
              <input type="color" name="accentColor" onChange={handleInputChange} className="form-control w-75" id="formGroupExampleInput2"  />
            </div>
            <div className="form-group mt-2">
              <label >Header color</label>
              <input type="color" name="headerColor" onChange={handleInputChange} className="form-control w-75" id="formGroupExampleInput2"  />
            </div>
            <div className="form-group mt-2 ">
              <label >Background color</label>
              <input type="color" name="backgroundColor" onChange={handleInputChange} className="form-control w-75 color-field" id="formGroupExampleInput2"  />
            </div>
          </div>
          <div className='d-flex justify-content-end mt-5 me-5'>
            <Button variant="outlined" onClick={handleSubmit} sx={{mr:2}}>cancel</Button>
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </CommonCard>
    </div>
  )
}

export default AppSetting