import { call, put } from "redux-saga/effects";

import * as api from "../../api/network/post";

import * as types from "./types";

export function* list(params) {
  try {
    let response = yield call(function (action) {
      return api.list(action.payload);
    }, params);
    if (response.data.ok) {
      yield put({ type: types.LIST_SUCCESS, data: response.data });
    } else {
      yield put({
        type: types.LIST_FAILURE,
        error: "Không thể lấy danh sách bài viết",
      });
    }
  } catch (error) {
    yield put({ type: types.LIST_FAILURE, error });
  }
}

export function* create(params) {
  let response = yield call(function (action) {
    return api.create(action.payload);
  }, params);

  if (response.data.ok) {
    yield put({ type: types.CREATE_SUCCESS, data: response.data.data });
  } else {
    yield put({ type: types.CREATE_FAILURE, error: "Không thể tạo bài viết" });
  }
}

export function* read(params) {
  let response = yield call(function (action) {
    return api.read(action.id);
  }, params);

  if (response.data.ok) {
    yield put({ type: types.DETAIL_SUCCESS, data: response.data });
  } else {
    yield put({
      type: types.DETAIL_FAILURE,
      error: "Không thể lấy chi tiết bài viết",
    });
  }
}

export function* update(params) {
  let response = yield call(function (action) {
    return api.update(action.id, action.payload);
  }, params);

  if (response.data.ok) {
    yield put({ type: types.UPDATE_SUCCESS, data: response.data });
  } else {
    yield put({
      type: types.UPDATE_FAILURE,
      error: "Không thể cập nhật bài viết",
    });
  }
}

export function* destroy(params) {
  let response = yield call(function (action) {
    return api.destroy(action.id);
  }, params);

  if (response.data.ok) {
    yield put({ type: types.DELETE_SUCCESS, data: response.data });
  } else {
    yield put({ type: types.DELETE_FAILURE, error: "Không thể xóa bài viết" });
  }
}
