import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ModuleList } from '../constants/ModuleList';
import StudentDetails from './StudentDetails';
import StationaryDetails from './stationary/StationaryDetails';
import PendingFeeIndex from './pendingFee/PendingFeeIndex';
import CertificationIndex from './certifications/CertificationIndex';

export default function StudentSubTabs() {
    const [value, setValue] = React.useState('Details');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        console.log(
            
        )
        setValue(newValue);
    };
    useEffect(() => {
        setValue('Details')

    }, [])

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        {/* <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" /> */}
                        {
                            ModuleList?.map((item: any, index: number) => {
                                return (
                                    <>
                                        <Tab label={item.name} value={item.value} />
                                    </>

                                )

                            })

                        }
                    </TabList>
                </Box>

                <TabPanel value="Details"><StudentDetails /></TabPanel>
                <TabPanel value="certificates"><CertificationIndex /></TabPanel>
                <TabPanel value="stationary"><StationaryDetails /></TabPanel>
                <TabPanel value="feeDetails"><PendingFeeIndex /></TabPanel>
            </TabContext>
        </Box>
    );
}
