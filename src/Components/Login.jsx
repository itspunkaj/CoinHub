import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ButtonGroup, Link } from '@mui/material';
import { makeStyles } from 'tss-react/mui';




function Login() {
    const [open,setOpen] = useState();

    const useStyles = makeStyles()(()=>{
      return {
        dialog : {
          fontFamily : "Montserrat",
          fontWeight : 900,
        }
      }
    })
    
    const {classes} = useStyles();

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
    
            <Dialog open={open} onClose={()=>handleClose()}><div style={{
              backgroundColor : "#E3F4F4",
            }}>
        <DialogTitle className= {classes.dialog} style={{textAlign : "center",
        }}></DialogTitle>
        <ButtonGroup>
          <Button>Login</Button>
          <Button>Sign Up</Button>
        </ButtonGroup>
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
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <Link style={{
          textAlign:"right",
          paddingRight: 30,
          fontFamily: "Montserrat",
          cursor: "pointer",
          }}
          >Not Registered? Sign Up</Link>
        <DialogActions style={{
          alignItems:"center",
          justifyContent : "center",
        }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
        </div>
      </Dialog>
        </>
    )
}

export default Login