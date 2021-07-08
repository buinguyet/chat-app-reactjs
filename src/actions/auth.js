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