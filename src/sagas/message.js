import { put, takeLatest, call, delay } from "redux-saga/effects";
import { FETCH_LIST_CONVERSATION, FETCH_LIST_MESSAGE } from "../constants/message";
import {
fetchListConversationSuccess,
fetchListConversationFailed,
fetchListMessageSuccess,
fetchListMessageFailed,
} from "../actions/message";
import { fetchListConversationApi, fetchListMessageApi } from "../apis/message";
import { STATUS_CODE } from "../constants/index";
import { setToken } from "../common/shared";
import { PATH_ROUTE } from "../constants/pathRoutes";

function* actionFetchListConversation(action) {
  try {
    yield delay(500);
    const { params } = action.payload;
    const response = yield call(fetchListConversationApi, params);
    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS && data.success === true) {
      yield put(fetchListConversationSuccess(data));
    } else {
      yield put(fetchListConversationFailed(data.message));
    }
  } catch (error) {
    yield put(fetchListConversationFailed(error));
  }
}

function* actionFetchListMessage(action) {
  try {
    yield delay(500);
    const { params } = action.payload;
    const response = yield call(fetchListMessageApi, params);
    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS && data.success === true) {
      yield put(fetchListMessageSuccess(data));
    } else {
      yield put(fetchListMessageFailed(data.message));
    }
  } catch (error) {
    yield put(fetchListMessageFailed(error));
  }
}

export function* watchMessageFetch() {
  yield takeLatest(FETCH_LIST_CONVERSATION, actionFetchListConversation);
  yield takeLatest(FETCH_LIST_MESSAGE, actionFetchListMessage);
}
