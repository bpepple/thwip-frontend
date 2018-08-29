import {
  FETCH_RECENT_ISSUES,
  FETCH_SERIES_LIST,
  FETCH_SERIES_DETAIL
} from './types';
import { authHeader } from '../components/helpers/auth-header';
import { push } from 'connected-react-router';
// Really should use the history from redux, but for now this works.
import history from '../History';

export const fetchRecentIssues = page => {
  const url = process.env.REACT_APP_API_URL + '/api/issue/recent/?page=' + page;
  const newUrl = '/issues/recent/page/' + page;

  return dispatch => {
    fetch(url, { method: 'GET', headers: authHeader() })
      .then(response => response.json())
      .then(data => {
        // if request is good update state
        dispatch({ type: FETCH_RECENT_ISSUES, data: data });
      })
      .catch(error => console.error('Fetch Recent Issues Error:\n', error));
    /* If our curent url is the same as our new one don't push it. */
    if (history.location.pathname !== newUrl) {
      dispatch(push(newUrl));
    }
  };
};

export const fetchSeriesList = page => {
  const url = process.env.REACT_APP_API_URL + '/api/series/?page=' + page;
  const newUrl = '/series/page/' + page;

  return dispatch => {
    fetch(url, { method: 'GET', headers: authHeader() })
      .then(response => response.json())
      .then(data => {
        // if request is good update state
        dispatch({ type: FETCH_SERIES_LIST, data: data });
      })
      .catch(error => console.error('Fetch Series List Error:\n', error));
    /* If our curent url is the same as our new one don't push it. */
    if (history.location.pathname !== newUrl) {
      dispatch(push(newUrl));
    }
  };
};

export const fetchSeriesDetail = (page, slug) => {
  const url =
    process.env.REACT_APP_API_URL +
    '/api/series/' +
    slug +
    '/issue_list/?page=' +
    page;
  const newUrl = '/series/' + slug + '/page/' + page;

  return dispatch => {
    fetch(url, { method: 'GET', headers: authHeader() })
      .then(response => response.json())
      .then(data => {
        // if request is good update state
        dispatch({ type: FETCH_SERIES_DETAIL, data: data });
      })
      .catch(error => console.error('Fetch Recent Issues Error:\n', error));
    /* If our curent url is the same as our new one don't push it. */
    if (history.location.pathname !== newUrl) {
      dispatch(push(newUrl));
    }
  };
};
