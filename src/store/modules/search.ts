import { ActionTypes, AppThunk, SearchActionTypes } from "../types";
import {
  ListDetailsInfluencersResponseType,
  SearchPayloadType,
} from "../../services/http/types";

import { httpService } from "../../services";

export interface SearchState {
  loading: boolean;
  error: boolean;
  searchResult: ListDetailsInfluencersResponseType[];
  searchPayload: SearchPayloadType;
}

const initialState: SearchState = {
  loading: false,
  error: false,
  searchResult: [],
  searchPayload: {},
};
export const searchReducer = (
  state = initialState,
  action: SearchActionTypes
): SearchState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ActionTypes.SEARCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case ActionTypes.SEARCH_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case ActionTypes.SEARCH_CLEAR: {
      return {
        ...initialState,
      };
    }
    case ActionTypes.SEARCH_UPDATE: {
      return {
        ...state,
        searchPayload: { ...action.payload.body },
        searchResult: [...state.searchResult, ...action.payload.result],
      };
    }
    default:
      return state;
  }
};

export const searchActions = {
  [ActionTypes.SEARCH_REQUEST]: (body: SearchPayloadType): AppThunk => async (
    dispatch
  ) => {
    dispatch({ type: ActionTypes.SEARCH_REQUEST });
    const response = await httpService.searchInfluencers(body);
    if (response) {
      dispatch({ type: ActionTypes.SEARCH_SUCCESS });
      dispatch({
        type: ActionTypes.SEARCH_UPDATE,
        payload: { result: response, body: body },
      });
    } else {
      dispatch({ type: ActionTypes.SEARCH_FAILURE });
    }
    return response;
  },
  [ActionTypes.SEARCH_CLEAR]: (): AppThunk => (dispatch) => {
    dispatch({ type: ActionTypes.SEARCH_CLEAR });
  },
};
