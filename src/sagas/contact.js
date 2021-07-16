import { put, takeLatest, call, delay } from "redux-saga/effects";
import { FETCH_LIST_FRIEND } from "../constants/contact";
import {
 fetchListFriendSuccess,
 fetchListFriendFailed
} from "../actions/contact";
import { fetchListFriendApi } from "../apis/contact";
import { STATUS_CODE } from "../constants/index";
import { setToken } from "../common/shared";
import { PATH_ROUTE } from "../constants/pathRoutes";

function* actionFetchListFriend(action) {
  try {
    yield delay(500);
    const { params } = action.payload;
    const response = yield call(fetchListFriendApi, params);
    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS && data.success === true) {
      yield put(fetchListFriendSuccess(data));
    } else {
      yield put(fetchListFriendFailed(data.message));
    }
  } catch (error) {
    yield put(fetchListFriendFailed(error));
  }
}

export function* watchContactFetch() {
  yield takeLatest(FETCH_LIST_FRIEND, actionFetchListFriend);
}
