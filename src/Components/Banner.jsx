import React from 'react';
import { Container, Typography } from '@mui/material';
import Carousel from './Carousel';


const styles= {
    banner : {
        backgroundImage : "url(./banner.png)",
    },
    bannerContent : {
        height : 400,
        display : "flex",
        flexDirection : "column",
        padding : 25,
        justifyContent : "space-around",
    },
    tagline: {
        display : "flex",
        height : "40%",
        flexDirection : "column",
        justifyContent : "content",
        textAlign : "center",
    },
}
function Banner() {
  return (
    <div style={styles.banner}>
        <Container style={styles.bannerContent}>
            <div style={styles.tagline}>
                <Typography
                    variant='h2'
                    style = {{
                        fontWeight: "bold",
                        marginBottom : 15,
                        fontFamily : 'Montserrat',
                        color : "white",
                    }}>
                        CoinHub
                </Typography>
                <Typography
                    variant="subtitle2"
                    style={{
                        color : "darkgrey",
                        textTransform : "capitalize",
                        fontFamily : "Montserrat",
                    }}>
                    Get all the Info regarding you favourite Crypto Currencies!
                </Typography>
            </div>
            <Carousel />
        </Container>
    </div>
  )
}

export default Banner