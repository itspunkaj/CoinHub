import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CryptoState } from '../CryptoContext'
import { TrendingCoins } from '../config/api'
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import { numberWithCommas } from './CoinsTable'
const styles = {
    carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
    },
    carouselItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        textTransform: "uppercase",
        color: "white",
    }
}

function Carousel() {
    const [trending, setTrending] = useState([]);
    const { currency, symbol } = CryptoState();
    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency));
        setTrending(data);
    };

    useEffect(() => {
        fetchTrendingCoins();
    }, [currency]);
    const items = trending.map((coin) => {
        let profit = coin.price_change_percentage_24h >= 0;

        return (
            <Link
                style={styles.carouselItem}
                to={`/coins/${coin.id}`}>
                <img
                    src={coin?.image}
                    alt={coin.name}
                    height="80"
                    style={{ marginBottom: 10 }} />
                <span>
                    {coin?.symbol}
                    &nbsp;
                    <span style={{ color: (profit ? 'rgb(14,203,129)' : 'red'), fontWeight: 500 }}>
                        {profit && "+"} {coin?.price_change_percentage_24h?.toFixed(2)}%
                    </span>
                </span>
                <span style={{ fontSize: 22, fontWeight: 500 }}>
                    {symbol}{numberWithCommas(coin?.current_price.toFixed(2))}
                </span>
            </Link>
        )
    })

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    };

    return (
        <div style={styles.carousel}>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                responsive={responsive}
                autoPlay
                disableDotsControls
                disableButtonsControls
                items={items}
            />
        </div>
    )
}

export default Carousel;