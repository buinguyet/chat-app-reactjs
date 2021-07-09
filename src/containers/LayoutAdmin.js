import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "../common/shared";
import { PATH_ROUTE } from "../constants/pathRoutes";

function AdminLayoutRoute(props) {
  const { component: ChildrenAdminComponent, ...remainProps } = props;
  console.log('34443');
  return (
    <Route
      {...remainProps}
      render={(routeProps) =>
        getToken() ? (
          <div {...remainProps}>
            <ChildrenAdminComponent {...routeProps} />
          </div>
        ) : (
          <Redirect
            to={{
              pathname: PATH_ROUTE.login,
            }}
          />
        )
      }
    />
  );
}
export default AdminLayoutRoute;
