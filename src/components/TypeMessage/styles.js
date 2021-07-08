import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
  title: {
    color: "#495057",
    fontWeight: "bolder",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  appBar: {
    height: "8vh",
    backgroundColor: "white",
    boxShadow: "0px 0px 0px 1px #ced4da",

  },
  icons: {
    color:'#7269ef',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "55vw !important",
    height: '4vh',
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    backgroundColor: "#e6ebf5!important",
  },
  inputRoot: {
    color: "#495057",
    width: "55vw",
    height: '4vh'
  },
}));


export default useStyles;
