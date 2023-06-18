import React from 'react'
import { Container, Button, Typography, TextField, DialogActions } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
function LoginDialog() {
  return (
    <Container style={{
      display: "flex",
      flexDirection: "column",
      width: 350,
      padding: 1,
    }}>
      <TextField
        margin="dense"
        id="name"
        label="Email"
        type="email"
        variant="outlined"
        style = {{width : "auto",}}
      />
      <TextField
        margin="dense"
        id="name"
        label="Password"
        type="password"
        variant="outlined"
      />

      <DialogActions style={{
        width : "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
      }}>
        <Button
          variant='contained'
          style={{
            width: "100%",
            backgroundColor : "blue",
          }}>Login</Button>
        <Typography style={{ padding: 0, margin: 10, }}>-----------OR-----------</Typography>
        <Button
          startIcon={<GoogleIcon />}
          variant='contained'
          style={{
            width: "100%",
            backgroundColor: "green",
          }}>Sign In with Google</Button>
      </DialogActions>
    </Container>
  )
}

export default LoginDialog