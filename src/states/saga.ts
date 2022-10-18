import { all, fork } from "redux-saga/effects";

import postsSaga from "./post/sagas";

export default function* root() {
  yield all([fork(postsSaga)]);
}
