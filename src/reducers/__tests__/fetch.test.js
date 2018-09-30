import { reducer } from '../fetch';
import {
  FETCH_RECENT_ISSUES,
  FETCH_SERIES_DETAIL,
  FETCH_SERIES_LIST,
  FETCH_PUBLISHER_DETAIL,
  FETCH_PUBLISHER_LIST,
  FETCH_ARC_LIST,
  FETCH_ARC_DETAIL,
  FETCH_ERROR
} from '../../actions/types';

const dataArc = {
  id: 7,
  name: 'Blackest Night',
  slug: 'blackest-night',
  image: 'http://127.0.0.1:8000/media/images/arcs/test.jpg',
  issue_count: 9,
  percent_read: 11,
  desc: "The Blackest Night is the third part of Geoff Johns's trilogy."
};

const dataPublisher = {
  slug: 'dc-comics',
  cvurl: 'https://comicvine.gamespot.com/dc-comics/4010-10/',
  name: 'DC Comics',
  desc: 'DC is a publisher of comic books featuring iconic characters.',
  image:
    'http://127.0.0.1:8000/media/images/publishers/1efb47e0-fe10-4bee-afd7-c5adcf4ffd68.jpg',
  series_count: 45
};

const dataSeries = {
  slug: 'mad',
  cvurl: 'https://comicvine.gamespot.com/mad/4050-9318/',
  name: 'MAD',
  sort_title: 'MAD',
  publisher: 'dc-comics',
  year: 1952,
  desc:
    'MAD Magazine has been a staple of American pop culture since the first issue in 1952.',
  issue_count: 415,
  percent_read: 6,
  image:
    'http://127.0.0.1:8000/media/images/issues/2a70956e-cd41-4308-982a-f0507a56fc26.jpg'
};

const dataIssue = {
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
    const beforeState = {};
    const action = {
      type: FETCH_RECENT_ISSUES,
      page: 2,
      count: 90,
      data: dataIssue
    };
    const afterState = reducer(beforeState, action);

    expect(afterState).toEqual({
      error: '',
      loaded: true,
      count: 90,
      page: 2,
      data: dataIssue
    });
  });
  it('fetch publisher list', () => {
    const beforeState = {};
    const action = { type: FETCH_PUBLISHER_LIST, page: 1, data: dataPublisher };
    const afterState = reducer(beforeState, action);

    expect(afterState).toEqual({
      error: '',
      loaded: true,
      data: dataPublisher,
      page: 1
    });
  });
  it('fetch publisher detail', () => {
    const beforeState = {};
    const action = { type: FETCH_PUBLISHER_DETAIL, page: 1, data: dataSeries };
    const afterState = reducer(beforeState, action);

    expect(afterState).toEqual({
      error: '',
      loaded: true,
      data: dataSeries,
      page: 1
    });
  });
  it('fetch series list', () => {
    const beforeState = {};
    const action = { type: FETCH_SERIES_LIST, page: 1, data: dataSeries };
    const afterState = reducer(beforeState, action);

    expect(afterState).toEqual({
      error: '',
      loaded: true,
      data: dataSeries,
      page: 1
    });
  });
  it('fetch series detail', () => {
    const beforeState = {};
    const action = { type: FETCH_SERIES_DETAIL, page: 1, data: dataIssue };
    const afterState = reducer(beforeState, action);

    expect(afterState).toEqual({
      error: '',
      loaded: true,
      data: dataIssue,
      page: 1
    });
  });
  it('fetch arc list', () => {
    const beforeState = {};
    const action = { type: FETCH_ARC_LIST, page: 1, data: dataArc };
    const afterState = reducer(beforeState, action);

    expect(afterState).toEqual({
      error: '',
      loaded: true,
      data: dataArc,
      page: 1
    });
  });
  it('fetch arc detail', () => {
    const beforeState = {};
    const action = { type: FETCH_ARC_DETAIL, page: 1, data: dataArc };
    const afterState = reducer(beforeState, action);

    expect(afterState).toEqual({
      error: '',
      loaded: true,
      data: dataArc,
      page: 1
    });
  });
});
