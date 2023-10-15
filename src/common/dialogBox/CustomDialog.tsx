import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
export default function CustomDialog(props:any) {
    const {children, onClose,...other} = props;
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
            width: props?.width,
            fontSize: "14px"
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
        '& .MuiTypography-root': {
            fontSize: "13px",
            margin: "2px",
            width: "90%",
            padding: "5px",
            textAlign: "center",

        },
        '& .MuiButtonBase-root': {
            width: "10%",
            top: "0px",
            marginLeft: "5px",
            fontSize: "13px",
        },

    }));

    const [open, setOpen] = React.useState(props?.open);
    const handleClose = () => {
        props?.onClose();
    };

    return (
        <div>
            <BootstrapDialog
                aria-labelledby="customized-dialog-title"
                open={props.open}
                maxWidth={props.maxWidth ? props.maxWidth : 'lg'}
                fullWidth={props.fullWidth === false ? false : true} 
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                   <span>{props.title}</span>
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    {props.children}
                </DialogContent>
                <DialogActions>
                    {console.log("58...",props.actionType)}
                    {props.actionType==='Close' ?  <Button autoFocus onClick={handleClose}>Close</Button> : <Button autoFocus onClick={handleClose}>cancel</Button>}
                    {props.actionType && props.actionType!=='Close' && <Button type='submit' form={props.form} autoFocus onClick={props.onSubmitHandler}>
                    {props.actionType==='Submit' ? 'Submit' : props.actionType=== 'Update '? 'Update' : props.actionType}
                    </Button> }
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
