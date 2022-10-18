import { IPost } from "../../models/post";

export const LIST_REQUEST = "post/LIST_REQUEST";
export const LIST_SUCCESS = "post/LIST_SUCCESS";
export const LIST_FAILURE = "post/LIST_FAILURE";

export const CREATE_REQUEST = "post/CREATE_REQUEST";
export const CREATE_SUCCESS = "post/CREATE_SUCCESS";
export const CREATE_FAILURE = "post/CREATE_FAILURE";

export const DETAIL_REQUEST = "post/DETAIL_REQUEST";
export const DETAIL_SUCCESS = "post/DETAIL_SUCCESS";
export const DETAIL_FAILURE = "post/DETAIL_FAILURE";

export const UPDATE_REQUEST = "post/UPDATE_REQUEST";
export const UPDATE_SUCCESS = "post/UPDATE_SUCCESS";
export const UPDATE_FAILURE = "post/UPDATE_FAILURE";

export const DELETE_REQUEST = "post/DELETE_REQUEST";
export const DELETE_SUCCESS = "post/DELETE_SUCCESS";
export const DELETE_FAILURE = "post/DELETE_FAILURE";

export const RESET = "post/RESET";

export const SELECT_ALL = "post/SELECT_ALL";

export const SELECT_SINGLE = "post/SELECT_SINGLE";

export const SET_FILTER = "post/SET_FILTER";

export interface PostsState {
  pending: boolean;
  posts: IPost[];
  byId: IPost | null;
  ids: [];
  error: string | null;
}
