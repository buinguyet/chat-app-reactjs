import React from "react";
import RegisterComponent from "../../../components/Auth/Register/signUp";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as registerActions from "../../../actions/auth";

const RegisterContainer = (props) => {
  const { history, registerActionCreators } = props;
  const {fetchRegister}= registerActionCreators;
  const onClickRegister = (data) => {
    console.log("data: ", data);
    fetchRegister(data, history);
  };
  return (
    <RegisterComponent history={history} onClickRegister={onClickRegister} />
  );
};

const mapStateToProps = (state) => ({
  infoRegister: state.auth.infoRegister,
});
const mapDispatchToProps = (dispatch) => ({
  registerActionCreators: bindActionCreators(registerActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withRouter, withConnect)(RegisterContainer);
