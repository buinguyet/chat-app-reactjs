import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { DEFAULT_ROUTES, ADMIN_ROUTES } from "../constants/index";
import LayoutAdmin from "./Common/LayoutAdmin";

function Main(props) {
  const renderAdminRoutes = () => {
    const xhtml = ADMIN_ROUTES.map((route, index) => (
      <LayoutAdmin
        key={route.id}
        path={route.pathRoute}
        component={route.component}
        // exact={route.exact}
        name={route.name}
      />
    ));
    return xhtml;
  };

  const renderDefaultRoutes = () => {
    const xhtml = DEFAULT_ROUTES.map((route, index) => (
          <Route key={index} path={route.pathRoute} exact={route.exact}>
            <div style={{ paddingTop: "15vh" }}>
              <route.component />
            </div>
          </Route>
        ));
    return xhtml;
  };
  return (
    <Router>
      {/* <Switch> */}
        {renderAdminRoutes()}
        {renderDefaultRoutes()}
      {/* </Switch> */}
    </Router>
  );
}

export default Main;
