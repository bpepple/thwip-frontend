import {
  FETCH_PUBLISHER_LIST,
  FETCH_PUBLISHER_DETAIL,
  FETCH_SERIES_LIST,
  FETCH_SERIES_DETAIL,
  FETCH_RECENT_ISSUES,
  FETCH_ERROR
} from './types';
import { authHeader } from '../components/helpers/auth-header';
import { push } from 'connected-react-router';
// Really should use the history from redux, but for now this works.
import history from '../History';

export const fetchApiList = (type, page) => {
  let url, newUrl;
  switch (type) {
    case FETCH_PUBLISHER_LIST:
      url = process.env.REACT_APP_API_URL + '/api/publisher/?page=' + page;
      newUrl = '/publisher/page/' + page;
      break;
    case FETCH_SERIES_LIST:
      url = process.env.REACT_APP_API_URL + '/api/series/?page=' + page;
      newUrl = '/series/page/' + page;
      break;
    case FETCH_RECENT_ISSUES:
      url = process.env.REACT_APP_API_URL + '/api/issue/recent/?page=' + page;
      newUrl = '/issues/recent/page/' + page;
      break;
    default:
      url = '';
      newUrl = '';
  }

  return dispatch => {
    fetch(url, { method: 'GET', headers: authHeader() })
      .then(response => {
        if (response.status !== 200) {
          return Promise.reject(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // If response is good update the state.
        dispatch({ type: type, data: data, page: page });
      })
      .catch(error => {
        dispatch(fetchError(error));
      });
    // If our current url is the same as our new one don't push it.
    if (history.location.pathname !== newUrl) {
      dispatch(push(newUrl));
    }
  };
};

export const fetchApiDetail = (type, page, slug) => {
  let url, newUrl;
  switch (type) {
    case FETCH_PUBLISHER_DETAIL:
      url =
        process.env.REACT_APP_API_URL +
        '/api/publisher/' +
        slug +
        '/series_list/?page=' +
        page;
      newUrl = '/publisher/' + slug + '/page/' + page;
      break;
    case FETCH_SERIES_DETAIL:
      url =
        process.env.REACT_APP_API_URL +
        '/api/series/' +
        slug +
        '/issue_list/?page=' +
        page;
      newUrl = '/series/' + slug + '/page/' + page;
      break;
    default:
      url = '';
      newUrl = '';
  }

  return dispatch => {
    fetch(url, { method: 'GET', headers: authHeader() })
      .then(response => {
        if (response.status !== 200) {
          return Promise.reject(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // If response is good update the state.
        dispatch({ type: type, data: data, page: page });
      })
      .catch(error => {
        dispatch(fetchError(error));
      });
    // If our current url is the same as our new one don't push it.
    if (history.location.pathname !== newUrl) {
      dispatch(push(newUrl));
    }
  };
};

export const fetchError = error => {
  return {
    type: FETCH_ERROR,
    payload: error
  };
};
