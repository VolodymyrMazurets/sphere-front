import { MiddlewareArray, configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";
import { listDetailsReducer } from "./modules/listDetails";
import { listReducer } from "./modules/list";
import logger from "redux-logger";
import { searchModalReducer } from "./modules/searchModal";
import { searchReducer } from "./modules/search";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  listState: listReducer,
  listDetailsState: listDetailsReducer,
  searchState: searchReducer,
  searchModalState: searchModalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray().concat(thunk, logger),
});

export default store;
