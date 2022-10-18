import { createSlice } from "@reduxjs/toolkit";

const startupSlice = createSlice({
  name: "startup",
  initialState: {
    locale: "vi-VN",
  },
  reducers: {},
});

const { actions, reducer } = startupSlice;
export { actions };
export default reducer;
