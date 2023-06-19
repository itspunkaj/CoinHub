import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, TableContainer, LinearProgress, TextField, Typography, Table, TableHead, TableRow, TableCell, TableBody, Pagination, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => {
    return {
        row: {
            fontFamily: "Montserrat",
            cursor: "pointer",
            '&:hover': {
                backgroundColor: "#E3F4F4",
            },
        },
        pagination: {
            "& .MuiPaginationItem-root": {
                color: "blue",
            },
        },
    }

})

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function CoinsTable() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    const { currency, symbol } = CryptoState();

    const history = useNavigate();

    const fetchCoins = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));
        setCoins(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchCoins();
    }, [currency]);

    const lightTheme = createTheme({
        palette: {
            primary: {
                main: '#000',
            },
            mode: "light",
        }
    });

    const handleSearch = () => {
        return coins.filter((coin) => (
            coin.name.toLowerCase().substring(0, search.length).includes(search) ||
            coin.symbol.toLowerCase().substring(0, search.length).includes(search)
        )

        )
    }

    const { classes } = useStyles();
    return (
        <Container style={{ textAlign: "center" }}>
            <Typography
                variant="h4"
                style={{ margin: 50, fontFamily: "Montserrat" }}
            >
                Cryptocurrency Prices by Market Cap
            </Typography>
            <ThemeProvider theme={lightTheme}>
                <TextField
                    label="Search For a Crypto Currency.."
                    color="primary"
                    variant='outlined'
                    style={{ marginBottom: 20, width: '100%', color: "black" }}
                    onChange={(e) => setSearch(e.target.value)}

                />
            </ThemeProvider>
            <TableContainer component={Paper}>
                {loading ?
                    (<LinearProgress style={{ backgroundColor: "white" }} />) :
                    (<Table>
                        <TableHead style={{ backgroundColor: "blue" }}>
                            <TableRow>
                                {["Coin", "Price", "24H Change", "Market Cap"].map((head) => (
                                    <TableCell
                                        style={{
                                            color: "white",
                                            fontWeight: "700",
                                            fontFamily: "Montserrat",
                                            fontSize: 20,
                                        }}
                                        key={head}
                                        align={head === "Coin" ? "justify" : "right"}
                                    >
                                        {head}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {handleSearch().slice((page - 1) * 10, (page - 1) * 10 + 10).map(coin => {
                                const profit = coin.price_change_percentage_24h >= 0;
                                return (
                                    <TableRow
                                        onClick={() => history(`/coins/${coin.id}`)}
                                        className={classes.row}
                                        key={coin.name}
                                    >
                                        <TableCell component="th" scope="row"
                                            style={{
                                                display: "flex",
                                                gap: 15,
                                            }}
                                        >
                                            <img
                                                src={coin?.image}
                                                alt={coin.name}
                                                height="50"
                                                style={{ marginBottom: 10 }}
                                            />
                                            <div style={{ display: "flex", flexDirection: "column", marginLeft: 30 }}>
                                                <span
                                                    style={{
                                                        textTransform: "uppercase",
                                                        fontSize: 22,
                                                    }}
                                                >
                                                    {coin.symbol}
                                                </span>
                                                <span style={{ color: "darkgrey" }}>{coin.name}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                        > {symbol}{" "}{numberWithCommas(coin.current_price.toFixed(2))}
                                        </TableCell>
                                        <TableCell
                                            align='right'
                                            style={{
                                                color: profit > 0 ? "rgb(14, 203, 129" : "red",
                                                fontWeight: 500,
                                            }}
                                        > {profit && "+"}{coin.price_change_percentage_24h}%
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                        > {symbol}{" "}{numberWithCommas(coin.market_cap.toString().slice(0, -6))}M
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>)
                }
            </TableContainer>
            <Pagination
                className={classes.pagination}
                style={{
                    padding: 20,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
                count={parseInt((handleSearch()?.length / 10).toFixed(0))}
                onChange={(_, value) => {
                    setPage(value);
                    window.scroll(0, 450);
                }}
            />
        </Container>
    );
}

export default CoinsTable
