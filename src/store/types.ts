import { rootReducer, store } from "./index";

import { AccountType } from "../types/entities";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  StoreAction
>;

export enum ActionTypes {
  // Search Modal Store
  SEARCH_MODAL_SHOW = "SEARCH_MODAL_SHOW",
  SEARCH_MODAL_HIDE = "SEARCH_MODAL_HIDE",
  // Acoount Store
  ACCOUNT_REQUEST = "ACCOUNT_REQUEST",
  ACCOUNT_SUCCESS = "ACCOUNT_SUCCESS",
  ACCOUNT_FAILURE = "ACCOUNT_FAILURE",
  ACCOUNT_UPDATE = "ACCOUNT_UPDATE",
  ACCOUNT_CLEAN = "ACCOUNT_CLEAN",
}

export type AccountActionTypes =
  | (Action<ActionTypes.ACCOUNT_UPDATE> & { payload: AccountType })
  | Action<ActionTypes.ACCOUNT_REQUEST>
  | Action<ActionTypes.ACCOUNT_SUCCESS>
  | Action<ActionTypes.ACCOUNT_FAILURE>
  | Action<ActionTypes.ACCOUNT_CLEAN>;

export type SearchModalActionTypes =
  | Action<ActionTypes.SEARCH_MODAL_HIDE>
  | Action<ActionTypes.SEARCH_MODAL_SHOW>;

export type StoreAction = AccountActionTypes | SearchModalActionTypes;
