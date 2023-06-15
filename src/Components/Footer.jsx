import { Container, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Container style= {{
        textAlign: "center",
    }}><Typography
    style={{ color:"grey", marginTop: 18, fontFamily: "Montserrat" }}>
         Copyright © 2023
    </Typography></Container>
  )
}

export default Footer