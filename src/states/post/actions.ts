import * as types from "./types";

const listRequest = () => ({ type: types.LIST_REQUEST });
const listSuccess = (payload: any) => ({ type: types.LIST_SUCCESS, payload });
const listFailure = (payload: any) => ({ type: types.LIST_FAILURE, payload });

export const actions = {
  listRequest,
  listSuccess,
  listFailure,
};
