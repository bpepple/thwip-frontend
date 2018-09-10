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
  data: null,
  page: 1,
  count: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECENT_ISSUES:
      return {
        ...state,
        error: '',
        loaded: true,
        data: action.data,
        page: action.page,
        count: action.count
      };
    case FETCH_SERIES_DETAIL:
      return {
        ...state,
        error: '',
        loaded: true,
        data: action.data,
        page: action.page
      };
    case FETCH_SERIES_LIST:
      return {
        ...state,
        error: '',
        loaded: true,
        data: action.data,
        page: action.page
      };
    case FETCH_PUBLISHER_LIST:
      return {
        ...state,
        error: '',
        loaded: true,
        data: action.data,
        page: action.page
      };
    case FETCH_PUBLISHER_DETAIL:
      return {
        ...state,
        error: '',
        loaded: true,
        data: action.data,
        page: action.page
      };
    case FETCH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
