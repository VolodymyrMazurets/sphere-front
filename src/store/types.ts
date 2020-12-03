import { ListDetailsType, ListType, SearchType } from "../types/entities";
import { ProfileResponceType, SearchPayloadType } from "../services/http/types";
import { rootReducer, store } from "./index";

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
  // All influencer lists Store
  LIST_REQUEST = "LIST_REQUEST",
  LIST_SUCCESS = "LIST_SUCCESS",
  LIST_FAILURE = "LIST_FAILURE",
  LIST_UPDATE = "LIST_UPDATE",
  LIST_CREATE = "LIST_CREATE",
  LIST_DELETE = "LIST_DELETE",
  LIST_EDIT = "LIST_EDIT",
  LIST_ADD_INFLUENCER = "LIST_ADD_INFLUENCER",
  LIST_DELETE_INFLUENCER = "LIST_DELETE_INFLUENCER",
  // List details Store
  LIST_DETAILS_REQUEST = "LIST_DETAILS_REQUEST",
  LIST_DETAILS_SUCCESS = "LIST_DETAILS_SUCCESS",
  LIST_DETAILS_FAILURE = "LIST_DETAILS_FAILURE",
  LIST_DETAILS_UPDATE = "LIST_DETAILS_UPDATE",
  // Search Store
  SEARCH_REQUEST = "SEARCH_REQUEST",
  SEARCH_SUCCESS = "SEARCH_SUCCESS",
  SEARCH_FAILURE = "SEARCH_FAILURE",
  SEARCH_UPDATE = "SEARCH_UPDATE",
  SEARCH_CLEAR = "SEARCH_CLEAR",
  //Profile Store
  PROFILE_REQUEST = "PROFILE_REQUEST",
  PROFILE_SUCCESS = "PROFILE_SUCCESS",
  PROFILE_FAILURE = "PROFILE_FAILURE",
  PROFILE_UPDATE = "PROFILE_UPDATE",
  PROFILE_CLEAR = "PROFILE_CLEAR",
}

export type ListActionTypes =
  | (Action<ActionTypes.LIST_UPDATE> & { payload: ListType[] })
  | Action<ActionTypes.LIST_CREATE>
  | Action<ActionTypes.LIST_EDIT>
  | Action<ActionTypes.LIST_ADD_INFLUENCER>
  | Action<ActionTypes.LIST_DELETE_INFLUENCER>
  | Action<ActionTypes.LIST_REQUEST>
  | Action<ActionTypes.LIST_SUCCESS>
  | Action<ActionTypes.LIST_FAILURE>;

export type ListDetailsActionTypes =
  | (Action<ActionTypes.LIST_DETAILS_UPDATE> & { payload: ListDetailsType })
  | Action<ActionTypes.LIST_DETAILS_REQUEST>
  | Action<ActionTypes.LIST_DETAILS_SUCCESS>
  | Action<ActionTypes.LIST_DETAILS_FAILURE>;

export type SearchActionTypes =
  | (Action<ActionTypes.SEARCH_UPDATE> & {
      payload: { result: SearchType[]; body: SearchPayloadType };
    })
  | Action<ActionTypes.SEARCH_SUCCESS>
  | Action<ActionTypes.SEARCH_FAILURE>
  | Action<ActionTypes.SEARCH_REQUEST>
  | Action<ActionTypes.SEARCH_CLEAR>;

export type ProfileActionTypes =
  | (Action<ActionTypes.PROFILE_UPDATE> & {
      payload: ProfileResponceType;
    })
  | Action<ActionTypes.PROFILE_SUCCESS>
  | Action<ActionTypes.PROFILE_FAILURE>
  | Action<ActionTypes.PROFILE_REQUEST>
  | Action<ActionTypes.PROFILE_CLEAR>;

export type SearchModalActionTypes =
  | Action<ActionTypes.SEARCH_MODAL_HIDE>
  | Action<ActionTypes.SEARCH_MODAL_SHOW>;

export type StoreAction =
  | SearchModalActionTypes
  | ListActionTypes
  | ListDetailsActionTypes
  | SearchActionTypes
  | ProfileActionTypes;
