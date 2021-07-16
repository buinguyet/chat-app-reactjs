import {
    API_LIST_FRIENDS,
} from "../constants/apiEndPoint";

import {sendQueryToAPI} from '../common/shared'

const queryString = require('query-string');

export const fetchListFriendApi = (params = {}) => {
    let queryParams = '';
    if (Object.keys(params).length > 0) {
        try {
            queryParams = `?${queryString.stringify(params)}`;
        } catch (err) {
            queryParams = '';
        }
    }
    if (queryParams === '') {
        queryParams = '';
    }
    const uri = `${API_LIST_FRIENDS}${queryParams}`;
    return sendQueryToAPI(uri);
};
