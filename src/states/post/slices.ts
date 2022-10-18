import { createSlice } from "@reduxjs/toolkit";

import { IPost } from "../../models/post";
import adapter from "./adapter";

const postSlice = createSlice({
  name: "posts",
  initialState: adapter.getInitialState({
    pending: false,
    posts: [] as IPost[],
    error: null,
  }),
  reducers: {
    listRequest(state) {
      state.pending = true;
    },
    listSuccess(state, action) {
      state.pending = false;
      adapter.setAll(state, action.payload);
    },
    listFailure(state, action) {
      state.pending = false;
      state.error = action.payload;
    },
  },
});

export default postSlice;
