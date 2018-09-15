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
import issuesNormalizer from './issuesNormalizer';
// Really should use the history from redux, but for now this works.
import history from '../History';

const baseUrl = process.env.REACT_APP_API_URL;

const Views = {
  publisherList: page =>
    fetch(baseUrl + `/api/publisher/?page=${page}`, {
      method: 'GET',
      headers: authHeader()
    }),
  publisherDetail: (slug, page) =>
    fetch(baseUrl + `/api/publisher/${slug}/series_list/?page=${page}`, {
      method: 'GET',
      headers: authHeader()
    }),
  seriesList: page =>
    fetch(baseUrl + `/api/series/?page=${page}`, {
      method: 'GET',
      headers: authHeader()
    }),
  seriesDetail: (slug, page) =>
    fetch(baseUrl + `/api/series/${slug}/issue_list/?page=${page}`, {
      method: 'GET',
      headers: authHeader()
    }),
  recentIssues: page =>
    fetch(baseUrl + `/api/issue/recent/?page=${page}`, {
      method: 'GET',
      headers: authHeader()
    })
};

const responseJSON = response => {
  return response.json();
};

export const fetchPublisherList = page => {
  const newUrl = `/publisher/page/${page}`;

  return dispatch => {
    Views.publisherList(page)
      .then(responseJSON)
      .then(data => {
        // If response is good update the state.
        dispatch({ type: FETCH_PUBLISHER_LIST, data: data, page: page });
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

export const fetchSeriesList = page => {
  const newUrl = `/series/page/${page}`;

  return dispatch => {
    Views.seriesList(page)
      .then(responseJSON)
      .then(data => {
        // If response is good update the state.
        dispatch({ type: FETCH_SERIES_LIST, data: data, page: page });
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

export const fetchRecentIssues = page => {
  const newUrl = `/issues/recent/page/${page}`;

  return dispatch => {
    Views.recentIssues(page)
      .then(responseJSON)
      .then(data => {
        // If response is good update the state.
        dispatch({
          type: FETCH_RECENT_ISSUES,
          data: issuesNormalizer(data.results),
          page: page,
          count: data.count
        });
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

export const fetchPublisherDetail = (slug, page) => {
  const newUrl = `/publisher/${slug}/page/${page}`;

  return dispatch => {
    Views.publisherDetail(slug, page)
      .then(responseJSON)
      .then(data => {
        // If response is good update the state.
        dispatch({ type: FETCH_PUBLISHER_DETAIL, data: data, page: page });
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

export const fetchSeriesDetail = (slug, page) => {
  const newUrl = `/series/${slug}/page/${page}`;

  return dispatch => {
    Views.seriesDetail(slug, page)
      .then(responseJSON)
      .then(data => {
        // If response is good update the state.
        dispatch({
          type: FETCH_SERIES_DETAIL,
          data: issuesNormalizer(data.results),
          page: page,
          count: data.count
        });
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
