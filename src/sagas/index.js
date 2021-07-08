import { fork } from "redux-saga/effects";
import { watchAuthFetch } from "./auth";

function* rootSaga() {
  yield fork(watchAuthFetch);
}

export default rootSaga;
