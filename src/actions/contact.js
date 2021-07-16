import * as contactConstant from '../constants/contact';

// list friends
export const fetchListFriend = (params = {}) => ({
    type: contactConstant.FETCH_LIST_FRIEND,
    payload: {
        params,
    }
});

export const fetchListFriendSuccess = (data) => ({
    type: contactConstant.FETCH_LIST_FRIEND_SUCCESS,
    payload: {
        data,
    },
});

export const fetchListFriendFailed = (error) => ({
    type: contactConstant.FETCH_LIST_FRIEND_FAILED,
    payload: {
        error,
    },
});