import { FETCH_RECENT_ISSUES } from '../actions/types';

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_RECENT_ISSUES:
      return { ...state, error: '', loaded: true, data: action.data };
    default:
      return state;
  }
};
