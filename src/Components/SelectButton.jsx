import {  makeStyles  } from 'tss-react/mui';

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles()(()=>{
    return { selectbutton: {
      border: "1px solid blue",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? "blue" : "",
      color: selected ? "white" : "",
      fontWeight: 500,
      "&:hover": {
        backgroundColor: "blue",
        color: "white",
      },
      width: "22%",
      //   margin: 5,
    },}
  });

  const {classes} = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
