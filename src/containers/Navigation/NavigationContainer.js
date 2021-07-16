import React from "react";
import { setToken } from "../../common/shared";
import NavigationComponent from "../../components/Navigation/navigation";
import { PATH_ROUTE } from "../../constants/pathRoutes";

const NavigationContainer = (props) => {
  const {history}= props;
  const handleLogout= ()=>{
    setToken("TOKEN", "");
    setToken("userId", "");
    history.replace(PATH_ROUTE.login);
  }
  return <NavigationComponent handleLogout= {handleLogout} />;
};

export default NavigationContainer;
