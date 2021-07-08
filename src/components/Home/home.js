import React from "react";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  CssBaseline,
  Hidden,
  Drawer,
  InputBase,
  Divider,
} from "@material-ui/core";
import { useStyles } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import { useTheme } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import MessageIcon from "@material-ui/icons/Message";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import EditIcon from "@material-ui/icons/Edit";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import PrimarySearchAppBar from "../Header/menuBar";
import TypingMessage from "../TypeMessage/typeMessage";
import Message from "../Message/message";

const Home = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div>
      <CssBaseline />
      <main className={classes.content}>
        <Grid container>
          <Grid item xs={9} sm={9} md={9} lg={9}>
            <Grid container direction="row">
              <Grid item xs={12}>
                <PrimarySearchAppBar />
              </Grid>
              <Grid item xs={12} style={{ height: "85vh" }}>
                <Message />
              </Grid>
              <Grid item justify="flex-end" xs={12}>
                <TypingMessage />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Home;
