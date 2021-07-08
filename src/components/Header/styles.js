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
    height: "7vh",
    backgroundColor: "white",
    boxShadow: "2px 2px 2px #f8f9fa",
  },
  icons: {
    color:'#7269ef',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
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
}));

export default useStyles;
