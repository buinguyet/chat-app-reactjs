import { PATH_ROUTE } from "../constants/pathRoutes";
import LoginContainer from "../containers/Auth/Login/LoginContainer";
import RegisterContainer from "../containers/Auth/Register/RegisterContainer";
import HomeContainer from "../containers/Home/HomeContainer";

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export const DEFAULT_ROUTES = [
  {
    id: 1,
    pathRoute: PATH_ROUTE.login,
    name: "Login page",
    exact: true,
    component: LoginContainer,
  },
  {
    id: 2,
    pathRoute: PATH_ROUTE.register,
    name: "Register page",
    exact: true,
    component: RegisterContainer,
  },
];

export const ADMIN_ROUTES = [
  {
    id: 1,
    pathRoute: PATH_ROUTE.default,
    name: "Home page",
    exact: true,
    component: HomeContainer,
  },
];
