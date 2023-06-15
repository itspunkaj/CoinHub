import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function LoginButton() {
    const [open,setOpen] = useState();



    function handleClick() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }
    return (
        <>
            <Button variant='contained' disableElevation
                style={{
                    width: 100,
                    height: 40,
                    marginRight: 15,
                }}
                startIcon={<AccountCircleIcon />}
                onClick={()=>handleClick()}
            >Login</Button>
            <Dialog open={open} onClose={()=>handleClose()}>
        <DialogTitle style={{textAlign : "center"}}>Login</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
        </>
    )
}

export default LoginButton