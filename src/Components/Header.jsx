import React from 'react';
import { AppBar, Toolbar, Typography, Select, MenuItem, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import LoginButton from './Login/LoginButton';


const styles = {
  title: {
    flex: 1,
    color: 'blue',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
}

function Header() {

  const history = useNavigate();

  const { currency, setCurrency } = CryptoState();

  return (
    <AppBar position='static' style={{ backgroundColor: "#F5EFE7" }}>
      <Toolbar>
        <Typography onClick={() => history('/')} style={styles.title}
          variant='h6'>CoinHub</Typography>
        <Select variant='outlined' style={{
          width: 100,
          height: 40,
          marginRight: 15,
          color: "blue",
        }}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <MenuItem value={'USD'} >USD</MenuItem>
          <MenuItem value={'INR'} >INR</MenuItem>
        </Select>
        <LoginButton />
      </Toolbar>
    </AppBar>

  )
}
export default Header;