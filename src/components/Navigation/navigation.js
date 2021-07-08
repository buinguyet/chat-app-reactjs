import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import MessageIcon from "@material-ui/icons/Message";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import EditIcon from "@material-ui/icons/Edit";
import { useStyles } from "./styles";
import { useTheme } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  Hidden,
  Drawer,
} from "@material-ui/core";

const Navigation = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <br></br>
        <br></br>
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
        </ListItem>
        <br></br>
        <br></br>
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
        </ListItem>
        <br></br>
        <br></br>
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
        </ListItem>
        <br></br>
        <br></br>
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <GroupAddIcon />
          </ListItemIcon>
        </ListItem>
        <br></br>
        <br></br>
        <ListItem className={classes.listItem} button>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
        </ListItem>
        <br></br>
        <br></br>
      </List>
    </div>
  );
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Navigation;
