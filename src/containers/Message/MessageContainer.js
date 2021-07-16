import React from "react";
import MessageComponent from "../../components/Message/message";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as messageActions from "../../actions/message";
import { isEmpty } from "../../common/shared";

const MessageContainer = (props) => {
  const {messageActionCreators, listMessage, isListMessage}= props;
 return <MessageComponent listMessage= {listMessage?.data} isListMessage= {isListMessage} />;
};

const mapStateToProps = (state) => ({
  listMessage: state.message.listMessage,
  isListMessage: state.message.isListMessage,
});
const mapDispatchToProps = (dispatch) => ({
  messageActionCreators: bindActionCreators(messageActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withRouter, withConnect)(MessageContainer);
