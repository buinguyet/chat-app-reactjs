import * as authConstant from '../constants/auth';

// register
export const fetchRegister = (params = {}, history) => ({
    type: authConstant.FETCH_REGISTER,
    payload: {
        params,
    },
    history,
});

export const fetchRegisterSuccess = (data) => ({
    type: authConstant.FETCH_REGISTER_SUCCESS,
    payload: {
        data,
    },
});

export const fetchRegisterFailed = (error) => ({
    type: authConstant.FETCH_REGISTER_FAILED,
    payload: {
        error,
    },
});

export const fetchLogin = (params = {}, history) => ({
    type: authConstant.FETCH_LOGIN,
    payload: {
        params,
    },
    history,
});

export const fetchLoginSuccess = (data) => ({
    type: authConstant.FETCH_LOGIN_SUCCESS,
    payload: {
        data,
    },
});

export const fetchLoginFailed = (error) => ({
    type: authConstant.FETCH_LOGIN_FAILED,
    payload: {
        error,
    },
});