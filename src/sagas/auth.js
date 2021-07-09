import { put, takeLatest, call, delay } from "redux-saga/effects";
import {
  FETCH_REGISTER,
} from "../constants/auth";
import {
  fetchRegisterSuccess,
  fetchRegisterFailed,
} from "../actions/auth";
import { fetchRegisterApi } from "../apis/auth";
import { STATUS_CODE } from "../constants/index";
import {PATH_ROUTE} from '../constants/pathRoutes'

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
    console.log("register failed with catch");
  }
}

export function* watchAuthFetch() {
    yield takeLatest(FETCH_REGISTER, actionFetchRegister);
}
