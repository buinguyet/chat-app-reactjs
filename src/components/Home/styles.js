import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";

const drawerWidth = 80;
export const useStyles = makeStyles((theme) => ({
  a: {
    textDecoration: "none",
    color: "#7986cb",
  },
  nav: {
    backgroundColor: "#f5f7fb",
    height: "95vh",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  root: {
    display: "flex",
    backgroundColor: "white",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  listItem: {
    paddingLeft: "29%",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    maxHeight: "100%",
    // padding: theme.spacing(3),
  },
  title: {
    position: "relative",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    color: "#495057",
    fontWeight: "bolder",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    backgroundColor: "#e6ebf5!important",
    // '&:hover': {
    //   backgroundColor: "#adb5bd",
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#adb5bd",
  },
  inputRoot: {
    color: "inherit",
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

  listChats: {
    maxHeight: "92vh",
    overflow: "auto",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },

  time: {
    fontSize: "12px",
    textAlign: "right",
  },

  text: {
    color: "#495057",
    fontWeight: "bolder",
  },

  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.3em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px #edf2f4",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#edf2f4",
      outline: "1px solid #edf2f4",
    },
  },
}));

export const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);
