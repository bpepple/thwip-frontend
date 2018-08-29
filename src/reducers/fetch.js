import { FETCH_RECENT_ISSUES, FETCH_SERIES_DETAIL } from '../actions/types';

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_RECENT_ISSUES:
      return { ...state, error: '', loaded: true, data: action.data };
    case FETCH_SERIES_DETAIL:
      return { ...state, error: '', loaded: true, data: action.data };
    default:
      return state;
  }
};
