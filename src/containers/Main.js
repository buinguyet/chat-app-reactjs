import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { getToken } from "../common/shared";
import Login from "./Auth/Login/LoginContainer";
import Register from "./Auth/Register/RegisterContainer";
import Home from "./Home/HomeContainer";
import { PATH_ROUTE } from "../constants/pathRoutes";
import { DEFAULT_ROUTES, ADMIN_ROUTES } from "../constants/index";
import HomeContainer from "./Home/HomeContainer";
import LayoutAdmin from "./LayoutAdmin";

function Main(props) {
  console.log("33333");
  // const renderAdminRoutes = () => {
  //   const xhtml = ADMIN_ROUTES.map((route, index) => (
  //     // <Route key={route.id} path={route.pathRoute} exact={route.exact}>
  //     //     {getToken()? <route.component/> : <Redirect to={PATH_ROUTE.login} />}
  //     // </Route>
  //     <LayoutAdmin
  //       key={route.id}
  //       path={route.pathRoute}
  //       component={route.component}
  //       exact={route.exact}
  //       name={route.name}
  //     />
  //   ));
  //   return xhtml;
  // };

  const renderAdminRoutes = (token) => {
    const xhtml = ADMIN_ROUTES.map((route, index) => (
      <Route key={route.id} path={route.pathRoute} exact={route.exact}>
        {token ? <route.component /> : <Redirect to={PATH_ROUTE.login} />}
      </Route>
    ));
    return xhtml;
  };

  const renderDefaultRoutes = (token) => {
    const xhtml = DEFAULT_ROUTES.map((route, index) => (
      <Route key={index} path={route.pathRoute} exact={route.exact}>
        <div style={{ paddingTop: "15vh" }}>
          {!token ? <route.component /> : <Redirect to={PATH_ROUTE.register} />}
        </div>
      </Route>
    ));
    return xhtml;
  };

  // const renderDefaultRoutes = () => {
  //   const xhtml = DEFAULT_ROUTES.map((route, index) => (
  //         <Route key={index} path={route.pathRoute} exact={route.exact}>
  //           <div style={{ paddingTop: "15vh" }}>
  //             <route.component />
  //           </div>
  //         </Route>
  //       ));
  //   return xhtml;
  // };
  return (
    <Router>
      <Switch>
        {renderDefaultRoutes()}
        {renderAdminRoutes(getToken())}
        {/* <Route path="/" component={getToken() ? HomeContainer : Login} exact />
      <Route path="/register" component={getToken() ? HomeContainer : Register} />
      <Route path="/login" component={getToken() ? HomeContainer : Login} /> */}
      </Switch>
    </Router>
  );
}

export default Main;
