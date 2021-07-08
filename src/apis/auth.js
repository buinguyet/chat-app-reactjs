import {
    API_REGISTER,
    API_LOGIN
} from "../constants/apiEndPoint";

import {axiosBodyToAPI} from '../common/shared'

const queryString = require('query-string');

export const fetchRegisterApi = (params = {}) => {
    console.log("API_REGISTER: ", API_REGISTER)
    const body = params;
    return axiosBodyToAPI('POST', API_REGISTER, body);
};