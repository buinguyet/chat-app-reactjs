import React, { useEffect, useState } from "react";
import ConversationComponent from "../../components/Conversation/conversation";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as contactActions from "../../actions/contact";
import * as messageActions from "../../actions/message";
import { getToken, isEmpty, lastItemOfArray } from "../../common/shared";
import { CONVERSATION_TYPES } from "../../constants";

const ConversationContainer = (props) => {
  const {
    contactsActionsCreators,
    listFriend,
    messageActionCreators,
    listConversation,
  } = props;
  const { fetchListFriend } = contactsActionsCreators;
  const { fetchListConversation, fetchListMessage } = messageActionCreators;
  const [background, setBackground] = useState("");
  useEffect(() => {
    const userId = getToken("userId");
    fetchListFriend({ userId });
    fetchListConversation({ userId });
  }, [fetchListConversation, fetchListFriend]);

  let newRsData = [];
  if (!isEmpty(listConversation?.data)) {
    newRsData = listConversation?.data?.map((conversation) => {
      const newCon = {};
      const lastMessage = lastItemOfArray(conversation.data);
      newCon.message = lastMessage;
      newCon.contact = conversation.contact;
      return newCon;
    });
  }

  const handleClickConversation = (data) => {
    setBackground(data?.contact?._id);
    const dataForSend= {
      senderId: getToken("userId"),
      receiverId: data?.contact?._id,
      skip: 0,
      isChatGroup: data?.message?.conversationType=== CONVERSATION_TYPES[1] ? true : false,
    };
    fetchListMessage(dataForSend);
  };

  return (
    <ConversationComponent
      dataChats={newRsData}
      background={background}
      handleClickConversation={handleClickConversation}
    />
  );
};

const mapStateToProps = (state) => ({
  listFriend: state.contact.listFriend,
  isListFriend: state.contact.isListFriend,
  listConversation: state.message.listConversation,
  isListConversation: state.message.isListConversation,
});
const mapDispatchToProps = (dispatch) => ({
  contactsActionsCreators: bindActionCreators(contactActions, dispatch),
  messageActionCreators: bindActionCreators(messageActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withRouter, withConnect)(ConversationContainer);
