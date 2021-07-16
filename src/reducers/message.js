import * as messageConstant from "../constants/message";

const initialState = {
  isListConversation: false,
  isListMessage: false,
  listConversation: [],
  listMessage: [],
  contactInfo:{},
  errorListConversation: null,
  errorListMessage: null,
};
const stateDefault = {
  isListConversation: false,
  isListMessage: false,
  listConversation: [],
  listMessage: [],
  contactInfo:{},
  errorListConversation: null,
  errorListMessage: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case messageConstant.FETCH_LIST_CONVERSATION: {
      return {
        ...state,
        isListConversation: true,
        errorListConversation: null,
        status: stateDefault,
      };
    }
    case messageConstant.FETCH_LIST_CONVERSATION_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        isListConversation: false,
        errorListConversation: null,
        status: { ...state.status },
        listConversation: data,
        listMessage: data?.data[0] || [],
        contactInfo: data?.data[0]?.contact
      };
    }
    case messageConstant.FETCH_LIST_CONVERSATION_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        isListConversation: false,
        errorListConversation: error || "",
        status: { ...state.status, isListConversation: false },
      };
    }
    case messageConstant.FETCH_LIST_MESSAGE: {
        return {
          ...state,
          isListMessage: true,
          errorListMessage: null,
          status: stateDefault,
        };
      }
      case messageConstant.FETCH_LIST_MESSAGE_SUCCESS: {
        const { data } = action.payload;
        console.log("data: ", data)
        return {
          ...state,
          isListMessage: false,
          errorListMessage: null,
          status: { ...state.status },
          listMessage: data?.data,
          contactInfo: data?.data?.contact,
        };
      }
      case messageConstant.FETCH_LIST_MESSAGE_FAILED: {
        const { error } = action.payload;
        return {
          ...state,
          isListMessage: false,
          errorListMessage: error || "",
          status: { ...state.status, isListMessage: false },
        };
      }
    default:
      return state;
  }
};

export default reducer;
