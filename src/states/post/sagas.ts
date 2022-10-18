import { all, call, put, takeLatest } from "redux-saga/effects";

import API from "../../api/network/post";
import { IPost } from "../../models/post";
import { IAxiosResponse } from "../../api/axios-types";
import * as ErrorHandle from "../../utils/error-handle";
import slices from "./slices";

function* list() {
  try {
    const response: IAxiosResponse<IPost[]> = yield call(API.getAllPosts);
    yield put(slices.actions.listSuccess(response.data));
  } catch (error) {
    yield put(slices.actions.listFailure(ErrorHandle.getErrorMessage(error)));
  }
}

function* postsSaga() {
  yield all([takeLatest(slices.actions.listRequest, list)]);
}

export default postsSaga;
