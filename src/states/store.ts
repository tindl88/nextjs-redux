import { configureStore } from "@reduxjs/toolkit";

import sagaMiddleware from "./middlewares/saga";
import loggerMiddleware from "./middlewares/logger";

import rootSaga from "./root-saga";
import rootReducer from "./root-reducer";
import preloadedState from "./preloaded-state";

const store = configureStore({
  middleware: [sagaMiddleware, loggerMiddleware],
  reducer: rootReducer,
  preloadedState,
});

const sagasManager = sagaMiddleware.run(rootSaga);

export { store, sagasManager };
