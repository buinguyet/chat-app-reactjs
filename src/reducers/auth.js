import * as accountConstant from "../constants/auth";

const initialState = {
  isLogOut: false,
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
        status: { ...state.status, isRegister: true },
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
    default:
      return state;
  }
};

export default reducer;
