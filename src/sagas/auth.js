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
import alertify from "alertifyjs";
import "../../node_modules/alertifyjs/build/css/alertify.css";
import "../../node_modules/alertifyjs/build/css/themes/semantic.css";

function* actionFetchRegister(action) {
  try {
    yield delay(500);
    const { params } = action.payload;
    const response = yield call(fetchRegisterApi, params);
    const { status, data } = response;
    console.log("response: ", response)
    if (status === STATUS_CODE.SUCCESS && data.success === true) {
      yield put(fetchRegisterSuccess(data.data));
      console.log("register success");
    } else {
      yield put(fetchRegisterFailed(params));
      alertify.error(response.data.error);
      console.log("register failed");
    }
  } catch (error) {
    yield put(fetchRegisterFailed(error));
    alertify.error(error.response.data.error);
    console.log("register failed with catch");
  }
}

export function* watchAuthFetch() {
    yield takeLatest(FETCH_REGISTER, actionFetchRegister);
}
