import { put, takeLatest, call, delay } from "redux-saga/effects";
import { FETCH_REGISTER, FETCH_LOGIN } from "../constants/auth";
import {
  fetchRegisterSuccess,
  fetchRegisterFailed,
  fetchLoginSuccess,
  fetchLoginFailed,
} from "../actions/auth";
import { fetchLoginApi, fetchRegisterApi } from "../apis/auth";
import { STATUS_CODE } from "../constants/index";
import { setToken } from "../common/shared";
import { PATH_ROUTE } from "../constants/pathRoutes";

function* actionFetchRegister(action) {
  try {
    yield delay(500);
    const { params, history } = action.payload;
    const response = yield call(fetchRegisterApi, params);
    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS && data.success === true) {
      yield put(fetchRegisterSuccess(data));
    } else {
      yield put(fetchRegisterFailed(data.message));
    }
  } catch (error) {
    yield put(fetchRegisterFailed(error));
  }
}

function* actionFetchLogin(action) {
  try {
    yield delay(500);
    const { params } = action.payload;
    const {history} = action;
    const response = yield call(fetchLoginApi, params);
    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS && data.success === true) {
      yield setToken("TOKEN", data.data.token);
      setToken("userId", data.data._id);
      yield put(fetchLoginSuccess(data.data));
       history.push(PATH_ROUTE.default);
    } else {
      yield put(fetchLoginFailed(data.message));
    }
  } catch (error) {
    yield put(fetchLoginFailed(error));
  }
}

export function* watchAuthFetch() {
  yield takeLatest(FETCH_REGISTER, actionFetchRegister);
  yield takeLatest(FETCH_LOGIN, actionFetchLogin);
}
