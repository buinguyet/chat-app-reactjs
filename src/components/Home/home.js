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
import { useStyles, StyledBadge } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import { useTheme } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import MessageIcon from "@material-ui/icons/Message";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import EditIcon from "@material-ui/icons/Edit";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const dataChats = [
  {
    id: 1,
    name: "Nguyet 1",
    avatar:
      "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
    text: "Love you",
    date: "2021-07-05",
  },
  {
    id: 2,
    name: "Nguyet 2",
    avatar:
      "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
    text: "Love you",
    date: "2021-07-05",
  },
  {
    id: 3,
    name: "Nguyet 3",
    avatar:
      "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
    text: "Love you",
    date: "2021-07-05",
  },
  {
    id: 4,
    name: "Nguyet 4",
    avatar:
      "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
    text: "Love you",
    date: "2021-07-05",
  },
  {
    id: 5,
    name: "Nguyet 5",
    avatar:
      "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
    text: "Love you",
    date: "2021-07-05",
  },
  {
    id: 6,
    name: "Nguyet 6",
    avatar:
      "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
    text: "Love you",
    date: "2021-07-05",
  },
  {
    id: 7,
    name: "Nguyet 7",
    avatar:
      "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
    text: "Love you",
    date: "2021-07-05",
  },
  {
    id: 8,
    name: "Nguyet 8",
    avatar:
      "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
    text: "Love you",
    date: "2021-07-05",
  },
  {
    id: 9,
    name: "Nguyet 9",
    avatar:
      "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
    text: "Love you",
    date: "2021-07-05",
  },
  {
    id: 10,
    name: "Nguyet 10",
    avatar:
      "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
    text: "Love you",
    date: "2021-07-05",
  },
  {
    id: 11,
    name: "Nguyet 11",
    avatar:
      "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
    text: "Love you",
    date: "2021-07-05",
  },
  {
    id: 11,
    name: "Nguyet 11",
    avatar:
      "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
    text: "Love you",
    date: "2021-07-05",
  },
  {
    id: 11,
    name: "Nguyet 11",
    avatar:
      "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
    text: "Love you",
    date: "2021-07-05",
  },
  {
    id: 11,
    name: "Nguyet 11",
    avatar:
      "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
    text: "Love you",
    date: "2021-07-05",
  },
  {
    id: 11,
    name: "Nguyet 11",
    avatar:
      "https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg",
    text: "Love you",
    date: "2021-07-05",
  },
];

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
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={classes.root}>
      <CssBaseline />
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
      <main className={classes.content}>
        <Grid container>
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={3}
            style={{ backgroundColor: "#f7f7ff" }}
          >
            <Typography className={classes.title} variant="h6" noWrap>
              Chats
            </Typography>
            <Grid container>
              <Grid item xs={12}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    fullWidth
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </Grid>
              <Divider />
              <Grid item xs={12}>
                <List className={classes.listChats}>
                  {dataChats?.map((data) => (
                    <div>
                      <ListItem button>
                        <ListItemAvatar>
                          <Avatar alt={data?.name} src={data?.avatar}></Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={data?.name}
                          secondary={data?.text}
                        />
                        <ListItemIcon>
                          <Typography>{data?.date}</Typography>
                        </ListItemIcon>
                      </ListItem>
                    </div>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9} sm={9} md={9} lg={9}>
            <Grid container>
              <Grid item xs={12}>
              <Avatar alt="Remy Sharp" src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697">
                <Typography>LENA@</Typography>
              </Avatar>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Home;
