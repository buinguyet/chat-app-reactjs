/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import LoginComponent from "../../../components/Auth/Login/login";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as loginActions from "../../../actions/auth";
import { PATH_ROUTE } from "../../../constants/pathRoutes";
import { setToken, getToken, isEmpty } from "../../../common/shared";

const LoginContainer = (props) => {
  const { history, loginActionCreators, infoLogin, errorLogin, isLogin } =
    props;
  const { fetchLogin } = loginActionCreators;
  const onClickLogin = (data) => {
    fetchLogin(data, history);
  };
  useEffect(() => {
    if (!isLogin && !errorLogin && !isEmpty(infoLogin)) {
      // set token
      setToken("TOKEN", infoLogin.token);
      setToken("userId", infoLogin._id);
    }
  }, [errorLogin, history, infoLogin, isLogin]);
  useEffect(() => {
    const isToken = getToken("TOKEN");
    if (isToken) {
      history.replace(PATH_ROUTE.default);
    }
  }, []);
  return (
    <LoginComponent
      history={history}
      onClickLogin={onClickLogin}
      infoLogin={infoLogin}
      errorLogin={errorLogin}
      isLogin={isLogin}
    />
  );
};

const mapStateToProps = (state) => ({
  infoLogin: state.auth.infoLogin,
  errorLogin: state.auth.errorLogin,
  isLogin: state.auth.isLogin,
});
const mapDispatchToProps = (dispatch) => ({
  loginActionCreators: bindActionCreators(loginActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withRouter, withConnect)(LoginContainer);
