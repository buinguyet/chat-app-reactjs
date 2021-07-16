import * as contactConstant from "../constants/contact";

const initialState = {
  isListFriend: false,
  isListReceive: false,
  listFriend: {},
  isListSent: false,
  listSent: {},
  listReceive: {},
  errorListFriend: null,
  errorListSent: null,
  errorListReceive: null,
};
const stateDefault = {
  isListFriend: false,
  isListReceive: false,
  listFriend: {},
  isListSent: false,
  listSent: {},
  listReceive: {},
  errorListFriend: null,
  errorListSent: null,
  errorListReceive: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case contactConstant.FETCH_LIST_FRIEND: {
      return {
        ...state,
        isListFriend: true,
        errorListReceive: null,
        status: stateDefault,
      };
    }
    case contactConstant.FETCH_LIST_FRIEND_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        isListFriend: false,
        errorListFriend: null,
        status: { ...state.status },
        listFriend: data,
      };
    }
    case contactConstant.FETCH_LIST_FRIEND_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        isListFriend: false,
        errorListFriend: error || "",
        status: { ...state.status, isListFriend: false },
      };
    }
    default:
      return state;
  }
};

export default reducer;
