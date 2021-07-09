import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 20,
    height: "70vh",
    width: "50vw",
    margin: "auto",
  },

  avatarStyle: { backgroundColor: "#1bbd7e" },
  btnStyle: {
    width: "10vw",
    height: "5vh",
    borderRadius: "20px",
    backgroundColor: "#7986cb",
    margin: "15px auto",
    marginBottom: "10px",
    display: "flex",
    "&:hover": {
      backgroundColor: "#7986cb",
    },
  },

  input: {
    margin: "15px 0 0 0",
  },
  title: {
    color: "white",
  },
  icon: {
    color: "#7986cb",
  },
  textSmall: {
    fontSize: "13px",
  },
  text: {
    fontSize: "15px",
  },
  a: {
    textDecoration: "none",
    color: "#7986cb",
  },

  error: {
    color: "#e63946",
    fontSize: "15px",
    fontWeight: "bolder",
  },

  success: {
    color: "#0a9396",
    fontSize: "15px",
    fontWeight: "bolder",
  },
}));
