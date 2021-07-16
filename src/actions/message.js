import * as messageConstant from '../constants/message';

// list friends
export const fetchListConversation = (params = {}) => ({
    type: messageConstant.FETCH_LIST_CONVERSATION,
    payload: {
        params,
    }
});

export const fetchListConversationSuccess = (data) => ({
    type: messageConstant.FETCH_LIST_CONVERSATION_SUCCESS,
    payload: {
        data,
    },
});

export const fetchListConversationFailed = (error) => ({
    type: messageConstant.FETCH_LIST_CONVERSATION_FAILED,
    payload: {
        error,
    },
});

// list messages
export const fetchListMessage = (params = {}) => ({
    type: messageConstant.FETCH_LIST_MESSAGE,
    payload: {
        params,
    }
});

export const fetchListMessageSuccess = (data) => ({
    type: messageConstant.FETCH_LIST_MESSAGE_SUCCESS,
    payload: {
        data,
    },
});

export const fetchListMessageFailed = (error) => ({
    type: messageConstant.FETCH_LIST_MESSAGE_FAILED,
    payload: {
        error,
    },
});