import { ActionTypes, AppThunk, ListDetailsActionTypes } from "../types";

import { ListDetailsType } from "../../types/entities";
import { httpService } from "../../services";
import { message } from "antd";

export interface ListDetailsState {
  loading: boolean;
  error: boolean;
  listDetails: ListDetailsType;
}

const initialState: ListDetailsState = {
  loading: false,
  error: false,
  listDetails: {},
};
export const listDetailsReducer = (
  state = initialState,
  action: ListDetailsActionTypes
): ListDetailsState => {
  switch (action.type) {
    case ActionTypes.LIST_DETAILS_REQUEST: {
      return {
        ...state,

        listDetails: {},
        loading: true,
        error: false,
      };
    }
    case ActionTypes.LIST_DETAILS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case ActionTypes.LIST_DETAILS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case ActionTypes.LIST_DETAILS_UPDATE: {
      return {
        ...state,
        listDetails: { ...action.payload },
      };
    }
    default:
      return state;
  }
};

export const listDetailsActions = {
  [ActionTypes.LIST_DETAILS_REQUEST]: (listId: string): AppThunk => async (
    dispatch
  ) => {
    dispatch({ type: ActionTypes.LIST_DETAILS_REQUEST });
    const response = await httpService.getListsDetails(listId);
    if (response) {
      dispatch({ type: ActionTypes.LIST_DETAILS_SUCCESS });
      dispatch({ type: ActionTypes.LIST_DETAILS_UPDATE, payload: response });
    } else {
      dispatch({ type: ActionTypes.LIST_DETAILS_FAILURE });
    }
    return response;
  },
  [ActionTypes.LIST_DETAILS_DELETE_INFLUENCER]: (
    listId: string,
    influencerId?: string | null
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.LIST_DETAILS_REQUEST });
    const response = await httpService.deleteInfluencer(listId, influencerId);
    if (response) {
      dispatch({ type: ActionTypes.LIST_DETAILS_SUCCESS });
      dispatch(listDetailsActions[ActionTypes.LIST_DETAILS_REQUEST](listId));
      message.success("List updated successfuly");
    } else {
      dispatch({ type: ActionTypes.LIST_FAILURE });
      message.error("Something wrong!");
    }
    return response;
  },
};
