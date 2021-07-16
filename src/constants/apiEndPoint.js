// export const API_END_POINT = process.env.URL_API;
export const API_END_POINT = 'http://localhost:2017';
/** start Auth */
export const API_REGISTER = `${API_END_POINT}/auth/register`;
export const API_LOGIN = `${API_END_POINT}/auth/login`;
/** end Auth */

/** start conversation */
export const API_LIST_FRIENDS= `${API_END_POINT}/contact/listFriend`;

/** start message */
export const API_LIST_CONVERSATIONS= `${API_END_POINT}/message/getConversations`;
export const API_LIST_MESSAGES= `${API_END_POINT}/message/getMessages`;