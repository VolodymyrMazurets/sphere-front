import { ActionTypes, AppThunk, SearchModalActionTypes } from "../types";

export interface SearchModalType {
  isVisible: boolean;
}

const initialState: SearchModalType = {
  isVisible: false,
};

export const searchModalReducer = (
  state = initialState,
  action: SearchModalActionTypes
): SearchModalType => {
  switch (action.type) {
    case ActionTypes.SEARCH_MODAL_SHOW: {
      return {
        ...state,
        isVisible: true,
      };
    }
    case ActionTypes.SEARCH_MODAL_HIDE: {
      return {
        ...state,
        isVisible: false,
      };
    }
    default:
      return state;
  }
};

export const searchModalActions = {
  [ActionTypes.SEARCH_MODAL_SHOW]: (): AppThunk => (dispatch) => {
    dispatch({ type: ActionTypes.SEARCH_MODAL_SHOW });
  },
  [ActionTypes.SEARCH_MODAL_HIDE]: (): AppThunk => (dispatch) => {
    dispatch({ type: ActionTypes.SEARCH_MODAL_HIDE });
  },
};
