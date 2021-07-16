import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import MessageIcon from "@material-ui/icons/Message";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import SettingsIcon from "@material-ui/icons/Settings";
import LanguageIcon from "@material-ui/icons/Language";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import { useTheme } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  Hidden,
  Drawer,
  Avatar,
} from "@material-ui/core";

const Navigation = (props) => {
  const { window, handleLogout } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon onClick={handleLogout}>
          <ExitToAppIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit">Logout</Typography>
      </MenuItem>
    </Menu>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const drawer = (
    <div className={classes.drawerBar}>
      <div className={classes.toolbar} />
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <ListItem
          style={{ display: "flex", flex: 1, justifyContent: "flex-start" }}
          button
        >
          <ListItemIcon className={classes.itemStyle}>
            <HomeIcon fontSize="large" style={{ color: "#7269ef" }} />
          </ListItemIcon>
        </ListItem>
        <div
          style={{
            display: "flex",
            flex: 9,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <List
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <ListItem className={classes.listItem} button>
              <ListItemIcon className={classes.itemStyle}>
                <PersonIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem className={classes.listItem} button>
              <ListItemIcon className={classes.itemStyle}>
                <MessageIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem className={classes.listItem} button>
              <ListItemIcon className={classes.itemStyle}>
                <GroupAddIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem className={classes.listItem} button>
              <ListItemIcon className={classes.itemStyle}>
                <SettingsIcon />
              </ListItemIcon>
            </ListItem>
          </List>
          <div style={{ display: "flex", flexDirection: "column-reverse" }}>
            <ListItem button>
              <ListItemIcon
                className={classes.itemStyle}
                onClick={handleProfileMenuOpen}
              >
                <Avatar
                  size="small"
                  alt="taylor"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8XD9LvUEuJIv0QyB0sJco5j7Pybnmo9XYA&usqp=CAU"
                />
              </ListItemIcon>
            </ListItem>
            <ListItem className={classes.listItem} button>
              <ListItemIcon className={classes.itemStyle}>
                <LanguageIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem className={classes.listItem} button>
              <ListItemIcon className={classes.itemStyle}>
                <Brightness4Icon />
              </ListItemIcon>
            </ListItem>
          </div>
        </div>
      </div>
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
          className={classes.flex}
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
      {renderMenu}
    </nav>
  );
};

export default Navigation;
