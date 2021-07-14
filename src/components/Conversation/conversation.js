import React from "react";
import { StyledBadge, useStyles } from "./styles";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  InputBase,
  Divider,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const Conversation = (props) => {
  const dataChats = props.dataChats;
  const classes = useStyles();
  return (
    <Grid
      item
      xs={3}
      sm={3}
      md={3}
      lg={3}
      style={{ backgroundColor: "#f5f7fb" }}
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
              placeholder="Search messages or users"
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
              <div key={data?.id}>
                <ListItem button>
                  <ListItemAvatar>
                    <StyledBadge
                      overlap="circle"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      variant="dot"
                    >
                      <Avatar alt={data?.name} src={data?.avatar}></Avatar>
                    </StyledBadge>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography className={classes.name}>
                        {data?.name}
                      </Typography>
                    }
                    secondary={
                      <Typography className={classes.text}>
                        {data?.text}
                      </Typography>
                    }
                  />
                  <ListItemIcon>
                    <Typography className={classes.time}>
                      {data?.date}
                    </Typography>
                  </ListItemIcon>
                </ListItem>
              </div>
            ))}
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Conversation;
