import { ActionTypes, AppThunk, ListActionTypes } from "../types";
import {
  CreateListPayloadType,
  ListDetailsInfluencersResponseType,
} from "../../services/http/types";

import { ListType } from "../../types/entities";
import { SelectValue } from "antd/lib/select";
import { httpService } from "../../services";
import { message } from "antd";

export interface ListState {
  loading: boolean;
  error: boolean;
  lists: ListType[];
}

const initialState: ListState = {
  loading: false,
  error: false,
  lists: [],
};
export const listReducer = (
  state = initialState,
  action: ListActionTypes
): ListState => {
  switch (action.type) {
    case ActionTypes.LIST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ActionTypes.LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case ActionTypes.LIST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case ActionTypes.LIST_UPDATE: {
      return {
        ...state,
        lists: [...action.payload],
      };
    }
    default:
      return state;
  }
};

export const listActions = {
  [ActionTypes.LIST_REQUEST]: (): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.LIST_REQUEST });
    const response = await httpService.getLists();
    if (response) {
      dispatch({ type: ActionTypes.LIST_SUCCESS });
      dispatch({ type: ActionTypes.LIST_UPDATE, payload: response });
    } else {
      dispatch({ type: ActionTypes.LIST_FAILURE });
    }
    return response;
  },
  [ActionTypes.LIST_CREATE]: (body: CreateListPayloadType): AppThunk => async (
    dispatch
  ) => {
    dispatch({ type: ActionTypes.LIST_REQUEST });
    const response = await httpService.createList(body);
    if (response) {
      dispatch({ type: ActionTypes.LIST_SUCCESS });
      dispatch(listActions[ActionTypes.LIST_REQUEST]());
    } else {
      dispatch({ type: ActionTypes.LIST_FAILURE });
    }
    return response;
  },
  [ActionTypes.LIST_DELETE]: (id: string): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.LIST_REQUEST });
    const response = await httpService.deleteList(id);
    if (response) {
      dispatch({ type: ActionTypes.LIST_SUCCESS });
      dispatch(listActions[ActionTypes.LIST_REQUEST]());
      message.success("List deleted successfuly");
    } else {
      dispatch({ type: ActionTypes.LIST_FAILURE });
      message.error("Something wrong!");
    }
    return response;
  },
  [ActionTypes.LIST_EDIT]: (
    body: CreateListPayloadType,
    id: string
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.LIST_REQUEST });
    const response = await httpService.editList(body, id);
    if (response) {
      dispatch({ type: ActionTypes.LIST_SUCCESS });
      dispatch(listActions[ActionTypes.LIST_REQUEST]());
      message.success("List updated successfuly");
    } else {
      dispatch({ type: ActionTypes.LIST_FAILURE });
      message.error("Something wrong!");
    }
    return response;
  },
  [ActionTypes.LIST_ADD_INFLUENCER]: (
    body: ListDetailsInfluencersResponseType,
    id: string | SelectValue
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.LIST_REQUEST });
    const response = await httpService.addInfluencerToListList(body, id);
    if (response) {
      dispatch({ type: ActionTypes.LIST_SUCCESS });
      message.success("List updated successfuly");
    } else {
      dispatch({ type: ActionTypes.LIST_FAILURE });
      message.error("Something wrong!");
    }
    return response;
  },
};
