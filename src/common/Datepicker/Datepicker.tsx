import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';

const DatePick = (props: any) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker label={props?.placeholder}
                    value={props?.value}
                    onChange={(e: any) => props?.onChange(e)}
                    className={props?.className}
                    // styles={props?.styles}
                    
                // id={props?.id}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}
export default DatePick