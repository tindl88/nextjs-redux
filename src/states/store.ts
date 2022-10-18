import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import sagaMiddleware from "./middlewares/saga";
import loggerMiddleware from "./middlewares/logger";

import rootSaga from "./saga";
import postsSlice from "./post/slices";

const preloadedState = {};

const rootReducer = combineReducers({
  posts: postsSlice.reducer,
});

const store = configureStore({
  middleware: [sagaMiddleware, loggerMiddleware],
  reducer: rootReducer,
  preloadedState,
});

const sagasManager = sagaMiddleware.run(rootSaga);

export { store, sagasManager };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
