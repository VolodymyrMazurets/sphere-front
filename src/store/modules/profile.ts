import { ActionTypes, AppThunk, ProfileActionTypes } from "../types";

import { ProfileResponceType } from "../../services/http/types";
import { httpService } from "../../services";

export interface ProfileState {
  loading: boolean;
  error: boolean;
  profile: ProfileResponceType;
}

const initialState: ProfileState = {
  loading: false,
  error: false,
  profile: {},
};
export const profileReducer = (
  state = initialState,
  action: ProfileActionTypes
): ProfileState => {
  switch (action.type) {
    case ActionTypes.PROFILE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ActionTypes.PROFILE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case ActionTypes.PROFILE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case ActionTypes.PROFILE_UPDATE: {
      return {
        ...state,
        profile: { ...action.payload },
      };
    }
    default:
      return state;
  }
};

export const profileActions = {
  [ActionTypes.PROFILE_REQUEST]: (influencerId: string): AppThunk => async (
    dispatch
  ) => {
    dispatch({ type: ActionTypes.PROFILE_REQUEST });
    const response = await httpService.getProfile(influencerId);
    if (response) {
      dispatch({ type: ActionTypes.PROFILE_SUCCESS });
      dispatch({ type: ActionTypes.PROFILE_UPDATE, payload: response });
    } else {
      dispatch({ type: ActionTypes.PROFILE_FAILURE });
    }
    return response;
  },
};
