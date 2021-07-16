import {
    API_LIST_CONVERSATIONS,
    API_LIST_MESSAGES,
} from "../constants/apiEndPoint";

import {sendQueryToAPI} from '../common/shared'

const queryString = require('query-string');

export const fetchListConversationApi = (params = {}) => {
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
    const uri = `${API_LIST_CONVERSATIONS}${queryParams}`;
    return sendQueryToAPI(uri);
};

export const fetchListMessageApi = (params = {}) => {
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
    const uri = `${API_LIST_MESSAGES}${queryParams}`;
    return sendQueryToAPI(uri);
};
