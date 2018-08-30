import {
  FETCH_RECENT_ISSUES,
  FETCH_SERIES_DETAIL,
  FETCH_SERIES_LIST,
  FETCH_SERIES_SEARCH,
  FETCH_PUBLISHER_DETAIL,
  FETCH_PUBLISHER_LIST
} from '../actions/types';

const initialState = {
  loaded: false,
  data: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECENT_ISSUES:
      return { ...state, error: '', loaded: true, data: action.data };
    case FETCH_SERIES_DETAIL:
      return { ...state, error: '', loaded: true, data: action.data };
    case FETCH_SERIES_LIST:
      return { ...state, error: '', loaded: true, data: action.data };
    case FETCH_SERIES_SEARCH:
      return { ...state, error: '', loaded: true, data: action.data };
    case FETCH_PUBLISHER_LIST:
      return { ...state, error: '', loaded: true, data: action.data };
    case FETCH_PUBLISHER_DETAIL:
      return { ...state, error: '', loaded: true, data: action.data };
    default:
      return state;
  }
};
