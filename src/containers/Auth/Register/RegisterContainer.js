import React, { useEffect } from "react";
import RegisterComponent from "../../../components/Auth/Register/signUp";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as registerActions from "../../../actions/auth";
import { PATH_ROUTE } from "../../../constants/pathRoutes";

const RegisterContainer = (props) => {
  const {
    history,
    registerActionCreators,
    infoRegister,
    errorRegister,
    isRegister,
  } = props;
  const { fetchRegister } = registerActionCreators;
  const onClickRegister = (data) => {
    fetchRegister(data, history);
  };
  useEffect(() => {
    if (!isRegister && !errorRegister && infoRegister?.success) {
      setTimeout(() => {
        history.push(PATH_ROUTE.login);
      }, 1000);
    }
  }, [errorRegister, history, infoRegister, isRegister]);
  return (
    <RegisterComponent
      history={history}
      onClickRegister={onClickRegister}
      infoRegister={infoRegister}
      errorRegister={errorRegister}
      isRegister={isRegister}
    />
  );
};

const mapStateToProps = (state) => ({
  infoRegister: state.auth.infoRegister,
  errorRegister: state.auth.errorRegister,
  isRegister: state.auth.isRegister,
});
const mapDispatchToProps = (dispatch) => ({
  registerActionCreators: bindActionCreators(registerActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withRouter, withConnect)(RegisterContainer);
