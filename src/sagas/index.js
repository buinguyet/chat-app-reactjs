import { fork } from "redux-saga/effects";
import { watchAuthFetch } from "./auth";
import {watchContactFetch} from './contact';
import {watchMessageFetch} from './message';

function* rootSaga() {
  yield fork(watchAuthFetch);
  yield fork(watchContactFetch);
  yield fork(watchMessageFetch);
}

export default rootSaga;
