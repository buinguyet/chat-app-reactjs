import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getToken } from "../common/shared";
import Login from "./Auth/Login/LoginContainer";
import Register from "./Auth/Register/RegisterContainer";
import Home from "./Home/HomeContainer";

function Main(props) {
  const token = getToken("TOKEN");
  return token ? (
    <Route path={props.path}>
      <props.component />
    </Route>
  ) : (
    <Route path={props.path}>
      <props.component />
    </Route>
  );
}

export default Main;
