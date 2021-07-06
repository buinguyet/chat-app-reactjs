import React from "react";
import { Avatar, Grid, Paper, Divider, List, 
  ListItem, ListItemIcon, ListItemText,
  Typography, CssBaseline , AppBar, Toolbar, IconButton,
  Hidden, Drawer,
  } from "@material-ui/core";
import { useStyles, StyledBadge } from "./styles";
import girl from "../../assets/images/girl.jpg";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import EditIcon from '@material-ui/icons/Edit';

const Home = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List >
      <br></br>
      <br></br>
      <ListItem className={classes.listItem} button>
            <ListItemIcon><HomeIcon /></ListItemIcon>
      </ListItem>
      <br></br>
      <br></br>
      <ListItem className={classes.listItem} button>
            <ListItemIcon><PersonIcon /></ListItemIcon>
      </ListItem>
      <br></br>
      <br></br>
      <ListItem className={classes.listItem} button>
            <ListItemIcon><MessageIcon /></ListItemIcon>
      </ListItem>
      <br></br>
      <br></br>
      <ListItem className={classes.listItem} button>
            <ListItemIcon><GroupAddIcon /></ListItemIcon>
      </ListItem>
      <br></br>
      <br></br>
      <ListItem className={classes.listItem} button>
            <ListItemIcon><EditIcon /></ListItemIcon>
      </ListItem>
      <br></br>
      <br></br>
      </List>
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    // <Grid container>
    //   <Grid item sx={1} sm={1} md={1} lg={1}>
    //     <Paper className={classes.nav}>
    //         <StyledBadge
    //           overlap="circle"
    //           anchorOrigin={{
    //             vertical: "bottom",
    //             horizontal: "right",
    //           }}
    //           variant="dot"
    //         >
    //           <Avatar className={classes.large} alt="moon" src={girl} />
    //         </StyledBadge>
    //     </Paper>
    //   </Grid>
    //   <Grid item sx={4} sm={4} md={4} lg={4}>
    //     <Paper style={{ height: "95vh" }}>Conversation</Paper>
    //   </Grid>
    //   <Grid item sx={7} sm={7} md={7} lg={7}>
    //     <Paper style={{ height: "95vh" }}>Main part</Paper>
    //   </Grid>
    // </Grid>

    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
};

export default Home;
