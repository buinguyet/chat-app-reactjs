import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

  paperStyle : {
    padding: 20,
    height: "100%",
    width: "100%",
    margin: '0',
    overflow: "auto"
  },

  icons: {
    color:'#7269ef',
    width: '15px'
  },
  images: {
    width: "200px",
    height: "200px"
  },
}));

export default useStyles;
