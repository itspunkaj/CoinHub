import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ButtonGroup, Grid, Link, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import GoogleIcon from '@mui/icons-material/Google';



function Login() {
  const [open, setOpen] = useState();

  const useStyles = makeStyles()(() => {
    return {
      login: {
        fontFamily: "Montserrat",
        fontWeight: 900,
        width: "100%",
        height: "100%",
        padding: 20,
      },
      signup: {
        fontFamily: "Montserrat",
        fontWeight: 900,
        width: "100%",
        height: "100%",
        padding: 20,
      }
    }
  })

  const { classes } = useStyles();

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
        onClick={() => handleClick()}
      >Login</Button>

      <Dialog open={open} onClose={() => handleClose()}>
        <div style={{
          backgroundColor: "#E3F4F4",
          height: 450,
          fontFamily: "Montserrat"
        }}>
          <DialogTitle style={{
            textAlign: "center",
            padding: 0,
          }}>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Button className={classes.login}>Login</Button>
              </Grid>
              <Grid item xs={6}>
                <Button className={classes.signup}>Sign Up</Button>
              </Grid>
            </Grid>
          </DialogTitle>

          <DialogContent style={{
            display: "flex",
            flexDirection: "column",
            width: 400,
            padding: 20,
          }}>
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
            display: "flex",
            paddingRight: 30,
            justifyContent: "flex-end",
            fontFamily: "Montserrat",
            cursor: "pointer",
          }}
          >Not Registered? Sign Up</Link>
          <DialogActions style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: 20,
          }}>
            <Button
              variant='contained'
              style={{
                width: "90%",

              }}>Login</Button>
            <Typography style={{ padding: 0, margin: 10, }}>-----------OR-----------</Typography>
            <Button
              startIcon = {<GoogleIcon/>}
              variant='contained'
              style={{
                width: "90%",
                backgroundColor : "green",

              }}>Sign In with Google</Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  )
}

export default Login