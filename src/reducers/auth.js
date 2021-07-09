import * as accountConstant from "../constants/auth";

const initialState = {
  isLogOut: false,
  isLogin: false,
  infoLogin: {},
  isForgotPassword: false,
  infoForgotPassword: {},
  isVerifyCode: false,
  infoVerifyCode: {},
  isResetPassword: false,
  isRegister: false,
  infoRegister: {},
  isActiveAccount: false,
  infoActiveAccount: {},
  errorLogin: null,
  errorVerify: null,
  errorRegister: null,
  errorActive: null,
};
const stateDefault = {
  isLogOut: false,
  isLogin: false,
  infoLogin: {},
  isForgotPassword: false,
  infoForgotPassword: {},
  isVerifyCode: false,
  infoVerifyCode: {},
  isResetPassword: false,
  isRegister: false,
  infoRegister: {},
  isActiveAccount: false,
  infoActiveAccount: {},
  errorLogin: null,
  errorVerify: null,
  errorRegister: null,
  errorActive: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case accountConstant.FETCH_REGISTER: {
      return {
        ...state,
        isRegister: true,
        errorRegister: null,
        status: stateDefault,
      };
    }
    case accountConstant.FETCH_REGISTER_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        isRegister: false,
        errorRegister: null,
        status: { ...state.status },
        infoRegister: data,
      };
    }
    case accountConstant.FETCH_REGISTER_FAILED: {
      const { error } = action.payload;
      let errorCatch = "";
      if (!error) {
        errorCatch = "Register failed";
      }
      return {
        ...state,
        isRegister: false,
        errorRegister: error || errorCatch,
        status: { ...state.status, isRegister: false },
      };
    }

    case accountConstant.FETCH_LOGIN: {
      return {
        ...state,
        isLogin: true,
        errorLogin: null,
        status: stateDefault,
      };
    }
    case accountConstant.FETCH_LOGIN_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        isLogin: false,
        errorLogin: null,
        status: { ...state.status },
        infoLogin: data,
      };
    }
    case accountConstant.FETCH_LOGIN_FAILED: {
      const { error } = action.payload;
      let errorCatch = "";
      if (!error) {
        errorCatch = "Login failed";
      }
      return {
        ...state,
        isLogin: false,
        errorLogin: error || errorCatch,
        status: { ...state.status },
      };
    }
    default:
      return state;
  }
};

export default reducer;
