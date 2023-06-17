import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../CryptoContext';
import { SingleCoin } from '../config/api';
import CoinInfo from '../Components/CoinInfo';
import { makeStyles } from 'tss-react/mui';
import axios from 'axios';
import { LinearProgress, Typography } from '@mui/material';
import ReactHtmlParser from 'html-react-parser'
import { numberWithCommas } from '../Components/CoinsTable';
import Footer from '../Components/Footer';

function Coinpage() {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  }

  useEffect(() => {
    fetchCoin();
  }, []);

  const useStyles = makeStyles()((theme) => {
    return {
      container: {
        display: "flex",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
        },
      },
      sidebar: {
        width: "30%",
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
        display: "flex",
        flexDirection: "Column",
        alignItems: "center",
        marginTop: 25,
        borderRight: "2px solid grey",
      },
      heading: {
        fontWeight: "bold",
        marginBottom: 20,
        fontFamily: "Montserrat",
      },
      description: {
        width: "100%",
        fontFamily: "Montserrat",
        padding: 25,
        paddingBottom: 15,
        paddingTop: 0,
        textAlign: "justify",
      },
      marketData: {
        alignSelf: "start",
        padding: 25,
        paddingTop: 10,
        width: "100%",
        [theme.breakpoints.down("md")]: {
          display: "flex",
          justifyContent: "space-around",
        },
        [theme.breakpoints.down(800)]: {
          flexDirection: "column",
          alignItems: "center",
        },
        [theme.breakpoints.down(375)]: {
          alignItems: "start",
        },
      }
    }
  });

  const { classes } = useStyles();

  if (!coin) return <LinearProgress style={{ backgroundColor: "white" }} />;

  return (
    <>
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <img
            src={coin?.image.large}
            alt={coin?.name}
            height="200"
            style={{ marginBottom: 20 }}
          />
          <Typography variant="h4" className={classes.heading}>
            {coin?.name}
          </Typography>
          <Typography variant='subtitle1' className={classes.description}>
            {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
          </Typography>
          <div className={classes.marketData}>
            <span style={{ display: "flex" }}>
              <Typography variant='h6' className={classes.heading}>
                Rank:
              </Typography>
              &nbsp; &nbsp;
              <Typography variant="h6" style={{ fontFamily: "Montserrat" }}>
                {coin?.market_cap_rank}
              </Typography>
            </span>
            <span style={{ display: "flex" }}>
              <Typography variant='h6' className={classes.heading}>
                Current Price:
              </Typography>
              &nbsp; &nbsp;
              <Typography variant="h6" style={{ fontFamily: "Montserrat" }}>
                {symbol}{" "}{numberWithCommas(
                  coin?.market_data.current_price[currency.toLowerCase()]
                )}
              </Typography>
            </span>
            <span style={{ display: "flex" }}>
              <Typography variant='h6' className={classes.heading}>
                Market Cap:
              </Typography>
              &nbsp; &nbsp;
              <Typography variant="h6" style={{ fontFamily: "Montserrat" }}>
                {symbol}{" "}
                {numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6))}M
              </Typography>
            </span>
          </div>
        </div>
        {/* chart */}
        <CoinInfo coin={coin} />
      </div>
      <Footer></Footer>
    </>

  )
}

export default Coinpage