import React from "react";
import HeaderContainer from "../Header/HeaderContainer";
import MessageContainer from "../Message/MessageContainer";
import TypeMessageContainer from "../TypeMessage/TypeMessageContainer";
import NavigationContainer from "../Navigation/NavigationContainer";
import ConversationContainer from "../Conversation/ConversationContainer";
import { Grid, CssBaseline } from "@material-ui/core";
import { useStyles } from "../../components/Home/styles";

const HomeContainer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavigationContainer />
      <CssBaseline />
      <main className={classes.content}>
        <Grid container>
          <ConversationContainer />
          <Grid item xs={9} sm={9} md={9} lg={9}>
            <Grid container direction="row">
              <Grid item xs={12}>
                <HeaderContainer />
              </Grid>
              <Grid item xs={12} style={{ height: "85vh" }}>
                <MessageContainer />
              </Grid>
              <Grid item justify="flex-end" xs={12}>
                <TypeMessageContainer />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default HomeContainer;
