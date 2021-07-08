import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";

const drawerWidth = 80;
export const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: "#f5f7fb",
    height: "95vh",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));
