import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Auth/Login/LoginContainer";
import Register from "./Auth/Register/RegisterContainer";
import Home from "./Home/HomeContainer";

function Main(props) {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <div style={{ paddingTop: "15vh" }}>
            <Register />
          </div>
        </Route>
        <Route path="/login">
          <div style={{ paddingTop: "15vh" }}>
            <Login />
          </div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Main;
