import { AccountActionTypes, ActionTypes, AppThunk } from '../types';

import { AccountType } from '../../types/entities';
import { httpService } from '../../services';

export interface AccountState extends AccountType {
  loading: boolean;
  error: boolean;
}

const initialState: AccountState = {
  loading: false,
  error: false,
};
export const accountReducer = (
  state = initialState,
  action: AccountActionTypes
): AccountState => {
  switch (action.type) {
    case ActionTypes.ACCOUNT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ActionTypes.ACCOUNT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case ActionTypes.ACCOUNT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case ActionTypes.ACCOUNT_UPDATE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export const accountActions = {
  [ActionTypes.ACCOUNT_REQUEST]: (): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.ACCOUNT_REQUEST });
    const response = await httpService.getAccount();
    if (response) {
      dispatch({ type: ActionTypes.ACCOUNT_SUCCESS });
      dispatch({ type: ActionTypes.ACCOUNT_UPDATE, payload: response });
    } else {
      dispatch({ type: ActionTypes.ACCOUNT_FAILURE });
    }
    return response;
  },
};
