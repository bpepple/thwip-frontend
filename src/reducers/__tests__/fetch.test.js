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
  it('fetch error', () => {
    const beforeState = {};
    const action = { type: FETCH_ERROR, payload: 'failed' };
    const afterState = reducer(beforeState, action);

    expect(afterState).toEqual({ error: 'failed' });
  });
  it('fetch recent issues', () => {
    const data = {
      __str__: '52 #001',
      slug: '52-001-2006',
      cvurl:
        'https://comicvine.gamespot.com/52-1-golden-lads-lasses-must/4000-105733/',
      series: '52',
      name: 'Golden Lads & Lasses Must...',
      number: '001',
      date: '2006-05-10',
      leaf: 0,
      page_count: 24,
      percent_read: 100,
      status: 2,
      desc: 'After the INFINITE CRISIS and before One Year Later.',
      image:
        'http://127.0.0.1:8000/media/images/issues/6ad10fb8-6106-4d06-b0b4-0aed825e145f.jpg'
    };
    const beforeState = {};
    const action = {
      type: FETCH_RECENT_ISSUES,
      page: 2,
      count: 90,
      data: data
    };
    const afterState = reducer(beforeState, action);
    expect(afterState).toEqual({
      error: '',
      loaded: true,
      count: 90,
      page: 2,
      data: data
    });
  });
});
