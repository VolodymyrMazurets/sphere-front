import { MiddlewareArray, configureStore } from "@reduxjs/toolkit";

import { accountReducer } from "./modules/account";
import { combineReducers } from "redux";
import logger from "redux-logger";
import { searchModalReducer } from "./modules/searchModal";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  accountState: accountReducer,
  searchModalState: searchModalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray().concat(thunk, logger),
});

export default store;
