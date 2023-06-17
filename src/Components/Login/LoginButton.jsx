import * as React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography, Box, } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import Slide from '@mui/material/Slide';
import LoginDialog from './LoginDialog'
import SignupDialog from './SignupDialog';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



function LoginButton() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0)


  const useStyles = makeStyles()(() => {
    return {
      tab: {
        fontFamily: "Montserrat",
        fontWeight: 900,
        height: "100%",
        width: "50%",
        padding: 20,
      },
    }
  })
  const { classes } = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleClick() {
    setValue(0);
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
        onClick={handleClick}
      >Login</Button>

      <Dialog open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <div style={{
          backgroundColor: "#E3F4F4",
          height: 450,
          fontFamily: "Montserrat",
          overflow: "hidden",
        }}>
          <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab className={classes.tab} label="Login" {...a11yProps(0)} />
                <Tab className={classes.tab} label="Sign Up" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <LoginDialog />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SignupDialog />
            </TabPanel>
          </Box>
        </div>
      </Dialog>
    </>
  )
}

export default LoginButton