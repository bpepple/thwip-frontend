import {
  FETCH_RECENT_ISSUES,
  FETCH_SERIES_DETAIL,
  FETCH_SERIES_LIST,
  FETCH_PUBLISHER_DETAIL,
  FETCH_PUBLISHER_LIST,
  FETCH_ERROR
} from '../actions/types';

const initialState = {
  error: '',
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
    case FETCH_PUBLISHER_LIST:
      return { ...state, error: '', loaded: true, data: action.data };
    case FETCH_PUBLISHER_DETAIL:
      return { ...state, error: '', loaded: true, data: action.data };
    case FETCH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
