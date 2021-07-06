import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({

  paperStyle : {
    padding: 20,
    height: "70vh",
    width: "50vw",
    margin: "auto",
  },

  avatarStyle : { backgroundColor: "#1bbd7e" },
  btnStyle : { 
      width: "10vw",
      height: "5vh",
      borderRadius: "20px",
      backgroundColor: "#7986cb",
      margin: '0 auto', 
      marginBottom:"10px",
      display: "flex",
      "&:hover": {
        backgroundColor: "#7986cb",
      },
    },

  input: {
      margin:"5px 0 15px 0",
  },
  title: {
    color: "white",
  },
  icon: {
    color:"#7986cb"
  },
  textSmall: {
    fontSize: '13px'
  },
  text: {
    fontSize: "15px"
  },
  a: {
    textDecoration:"none",
    color: "#7986cb"
  },

}));
