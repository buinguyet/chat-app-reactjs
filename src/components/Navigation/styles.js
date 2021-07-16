import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";

const drawerWidth = 80;
export const useStyles = makeStyles((theme) => ({
  flex: {
    display:"flex",
    flexDirection:"column",
    justifyContent: "center"
  },
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
  drawerBar: {
    height: "100%"
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  itemStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  }
}));
