/* eslint-disable no-unused-vars */
import React from 'react'
import { Container, Button, Typography, TextField, DialogActions } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
function SignupDialog() {
  return (
    <Container style={{
      display: "flex",
      flexDirection: "column",
      width: 350,
      padding: 0,
    }}>
      <TextField
        margin="dense"
        id="name"
        label="Email"
        type="email"
        fullWidth
        variant="outlined"
      />
      <TextField
        margin="dense"
        id="name"
        label="Password"
        type="password"
        fullWidth
        variant="outlined"
      />
      <TextField
        margin="dense"
        id="name"
        label="Confirm Password"
        type="password"
        fullWidth
        variant="outlined"
      />

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
            width: "100%",
            backgroundColor : "blue",
          }}>Sign Up</Button>
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

export default SignupDialog