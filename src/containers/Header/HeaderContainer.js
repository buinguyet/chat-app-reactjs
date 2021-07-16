import React from "react";
import HeaderComponent from "../../components/Header/menuBar";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as messageActions from "../../actions/message";

const HeaderContainer = (props) => {
  const {contactInfo, isListConversation, }= props;
  return <HeaderComponent contactInfo={contactInfo} isListConversation={isListConversation} />;
};

const mapStateToProps = (state) => ({
  contactInfo: state.message.contactInfo,
  isListConversation: state.message.isListConversation,
});
const mapDispatchToProps = (dispatch) => ({
  messageActionCreators: bindActionCreators(messageActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withRouter, withConnect)(HeaderContainer);
