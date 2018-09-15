import { reducer } from '../fetch';
import {
  FETCH_RECENT_ISSUES,
  FETCH_SERIES_DETAIL,
  FETCH_SERIES_LIST,
  FETCH_PUBLISHER_DETAIL,
  FETCH_PUBLISHER_LIST,
  FETCH_ERROR
} from '../../actions/types';

describe('fetch reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      error: '',
      loaded: false,
      data: {},
      page: 1,
      count: 0
    });
  });
});
