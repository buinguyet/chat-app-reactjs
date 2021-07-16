import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";

const drawerWidth = 80;
export const useStyles = makeStyles((theme) => ({
  a: {
    textDecoration: "none",
    color: "#7986cb",
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
  listItem: {
    paddingLeft: "29%",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    maxHeight: "100%",
  },
  title: {
    position: "relative",
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    scrollSnapMarginTop: theme.spacing(2),
    marginLeft: theme.spacing(5),
    width: "100%",
    color: "#495057",
    fontWeight: "bolder",
  },
  name: {
    fontSize: '15px!important',
    color: "#495057",
    fontFamily: `"Public Sans",sans-serif`,
    fontWeight: 600,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    height: "5vh",
    backgroundColor: "#e6ebf5!important",
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
    fontSize: '.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#495057',
    backgroundClip: 'padding-box',
    border: '1px solid #e6ebf5',
    appearance: 'none',
    borderRadius: '.25rem',
    transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
  },
  inputInput: {
    padding: theme.spacing(1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },

  listChats: {
    maxHeight: "87vh",
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
    color: "#7a7f9a",
    fontSize: "14px",
    textOverflow: 'ellipsis',
    fontFamily: `"Public Sans",sans-serif`
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
