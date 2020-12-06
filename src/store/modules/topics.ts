import {} from "../../types/entities";

import { ActionTypes, AppThunk, TopicsActionTypes } from "../types";

import { TopicsResponseType } from "../../services/http/types";
import { httpService } from "../../services";
import { message } from "antd";

export interface TopicsState {
  loading: boolean;
  error: boolean;
  topics: TopicsResponseType;
}

const initialState: TopicsState = {
  loading: false,
  error: false,
  topics: {},
};
export const topicsReducer = (
  state = initialState,
  action: TopicsActionTypes
): TopicsState => {
  switch (action.type) {
    case ActionTypes.TOPICS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ActionTypes.TOPICS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case ActionTypes.TOPICS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case ActionTypes.TOPICS_UPDATE: {
      return {
        ...state,
        topics: { ...action.payload },
      };
    }
    default:
      return state;
  }
};

export const topicsActions = {
  [ActionTypes.TOPICS_REQUEST]: (query: string): AppThunk => async (
    dispatch
  ) => {
    dispatch({ type: ActionTypes.TOPICS_REQUEST });
    const response = await httpService.getTopics(query);
    if (response) {
      dispatch({ type: ActionTypes.TOPICS_SUCCESS });
      dispatch({ type: ActionTypes.TOPICS_UPDATE, payload: response });
    } else {
      dispatch({ type: ActionTypes.TOPICS_FAILURE });
      message.error('Something wrong with asside topics');
    }
    return response;
  },
};
