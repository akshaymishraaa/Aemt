import React from 'react'
import Tooltip from '@mui/material/Tooltip';
const Tooltipprops = {
}
const CustomToolTip = (props: any) => {
    return (
        <Tooltip title={props.title} placement={props.placement}>

            {props.children}
        </Tooltip>
    )
}
export default CustomToolTip
