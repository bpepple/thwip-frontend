import {
  FETCH_RECENT_ISSUES,
  FETCH_SERIES_LIST,
  FETCH_SERIES_DETAIL,
  FETCH_SERIES_SEARCH,
  FETCH_PUBLISHER_LIST,
  FETCH_PUBLISHER_DETAIL,
  FETCH_ERROR
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
      .then(response => {
        if (response.status !== 200) {
          return Promise.reject(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // if request is good update state
        dispatch({ type: FETCH_RECENT_ISSUES, data: data });
      })
      .catch(error => {
        dispatch(fetchError(error));
      });

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
      .then(response => {
        if (response.status !== 200) {
          return Promise.reject(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // if request is good update state
        dispatch({ type: FETCH_SERIES_LIST, data: data });
      })
      .catch(error => {
        dispatch(fetchError(error));
      });
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
      .then(response => {
        if (response.status !== 200) {
          return Promise.reject(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // if request is good update state
        dispatch({ type: FETCH_SERIES_DETAIL, data: data });
      })
      .catch(error => {
        dispatch(fetchError(error));
      });

    /* If our curent url is the same as our new one don't push it. */
    if (history.location.pathname !== newUrl) {
      dispatch(push(newUrl));
    }
  };
};

export const fetchSeriesSearch = (page, query) => {
  const url =
    process.env.REACT_APP_API_URL +
    '/api/series/?page=' +
    page +
    '&search=' +
    query;
  const newUrl = '/search/page/' + page + '/?search=' + query;

  return dispatch => {
    fetch(url, { method: 'GET', headers: authHeader() })
      .then(response => {
        if (response.status !== 200) {
          return Promise.reject(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // if request is good update state
        dispatch({ type: FETCH_SERIES_SEARCH, data: data });
      })
      .catch(error => {
        dispatch(fetchError(error));
      });

    /* If our curent url is the same as our new one don't push it. */
    if (history.location.pathname !== newUrl) {
      dispatch(push(newUrl));
    }
  };
};

export const fetchPublisherList = page => {
  const url = process.env.REACT_APP_API_URL + '/api/publisher/?page=' + page;
  const newUrl = '/publisher/page/' + page;

  return dispatch => {
    fetch(url, { method: 'GET', headers: authHeader() })
      .then(response => {
        if (response.status !== 200) {
          return Promise.reject(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // if request is good update state
        dispatch({ type: FETCH_PUBLISHER_LIST, data: data });
      })
      .catch(error => {
        dispatch(fetchError(error));
      });

    /* If our curent url is the same as our new one don't push it. */
    if (history.location.pathname !== newUrl) {
      dispatch(push(newUrl));
    }
  };
};

export const fetchPublisherDetail = (page, slug) => {
  const url =
    process.env.REACT_APP_API_URL +
    '/api/publisher/' +
    slug +
    '/series_list/?page=' +
    page;
  const newUrl = '/publisher/' + slug + '/page/' + page;

  return dispatch => {
    fetch(url, { method: 'GET', headers: authHeader() })
      .then(response => {
        if (response.status !== 200) {
          return Promise.reject(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // if request is good update state
        dispatch({ type: FETCH_PUBLISHER_DETAIL, data: data });
      })
      .catch(error => {
        dispatch(fetchError('Failed to retrieve data.'));
      });

    /* If our curent url is the same as our new one don't push it. */
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
