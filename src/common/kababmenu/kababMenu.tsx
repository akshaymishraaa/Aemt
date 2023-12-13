import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CertificationIndex from '../../components/students/components/certifications/CertificationIndex';
import RecievedCertificationsList from '../../components/students/components/listOfReceivedCertificates/RecivedCertifications';
import StudentFeeDetails from '../../components/students/components/studentFeeRecord/StudentFeeRecordDetails';

const ITEM_HEIGHT = 48;
interface MenuPorps{
    options?:any,
    rowData?:any
}



export default function LongMenu(props: MenuPorps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                className='p-0'
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '30ch',
                    },
                }}
            >
                {
                    props?.options?.map((option:any,index:number)=>{
                        return(
                            <MenuItem>
                                <option.element Data={props?.rowData} setAnchorEl={setAnchorEl}/>
                            </MenuItem>
                        )

                    })
                }
            </Menu>
        </div>
    );
}