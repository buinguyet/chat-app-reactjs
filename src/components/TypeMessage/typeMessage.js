import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import InputBase from "@material-ui/core/InputBase";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import SendIcon from '@material-ui/icons/Send';
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import useStyles from "./styles";

export default function TypingMessage() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div className={classes.search}>
            <InputBase
              placeholder="Enter messages..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <InsertEmoticonIcon className={classes.icons} />
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <AttachFileIcon className={classes.icons} />
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <CropOriginalIcon className={classes.icons} />
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <SendIcon className={classes.icons} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
