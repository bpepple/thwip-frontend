import {
  FETCH_PUBLISHER_LIST,
  FETCH_PUBLISHER_DETAIL,
  FETCH_SERIES_LIST,
  FETCH_SERIES_DETAIL,
  FETCH_SERIES_SEARCH,
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
  publisherList: page => baseUrl + `/api/publisher/?page=${page}`,
  publisherDetail: (slug, page) =>
    baseUrl + `/api/publisher/${slug}/series_list/?page=${page}`,
  seriesList: page => baseUrl + `/api/series/?page=${page}`,
  seriesDetail: (slug, page) =>
    baseUrl + `/api/series/${slug}/issue_list/?page=${page}`,
  seriesSearch: (search, page) =>
    baseUrl + `/api/series/?page=${page}&search=${search}`,
  recentIssues: page => baseUrl + `/api/issue/recent/?page=${page}`
};

const responseStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response.statusText);
  }
};

const responseJSON = response => {
  return response.json();
};

export const fetchPublisherList = page => {
  const newUrl = `/publisher/page/${page}`;

  return dispatch => {
    fetch(Views.publisherList(page), { method: 'GET', headers: authHeader() })
      .then(responseStatus)
      .then(responseJSON)
      .then(data => {
        // If response is good update the state.
        dispatch({ type: FETCH_PUBLISHER_LIST, data: data, page: page });
      })
      .catch(error => {
        dispatch(fetchError(error));
      });
    if (history.location.pathname !== newUrl) {
      dispatch(push(newUrl));
    }
  };
};

export const fetchSeriesList = page => {
  const newUrl = `/series/page/${page}`;

  return dispatch => {
    fetch(Views.seriesList(page), { method: 'GET', headers: authHeader() })
      .then(responseStatus)
      .then(responseJSON)
      .then(data => {
        // If response is good update the state.
        dispatch({ type: FETCH_SERIES_LIST, data: data, page: page });
      })
      .catch(error => {
        dispatch(fetchError(error));
      });
    if (history.location.pathname !== newUrl) {
      dispatch(push(newUrl));
    }
  };
};

export const fetchRecentIssues = page => {
  const newUrl = `/issues/recent/page/${page}`;

  return dispatch => {
    fetch(Views.recentIssues(page), { method: 'GET', headers: authHeader() })
      .then(responseStatus)
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
    if (history.location.pathname !== newUrl) {
      dispatch(push(newUrl));
    }
  };
};

export const fetchPublisherDetail = (slug, page) => {
  const newUrl = `/publisher/${slug}/page/${page}`;

  return dispatch => {
    fetch(Views.publisherDetail(slug, page), {
      method: 'GET',
      headers: authHeader()
    })
      .then(responseStatus)
      .then(responseJSON)
      .then(data => {
        // If response is good update the state.
        dispatch({ type: FETCH_PUBLISHER_DETAIL, data: data, page: page });
      })
      .catch(error => {
        dispatch(fetchError(error));
      });
    if (history.location.pathname !== newUrl) {
      dispatch(push(newUrl));
    }
  };
};

export const fetchSeriesDetail = (slug, page) => {
  const newUrl = `/series/${slug}/page/${page}`;

  return dispatch => {
    fetch(Views.seriesDetail(slug, page), {
      method: 'GET',
      headers: authHeader()
    })
      .then(responseStatus)
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
    if (history.location.pathname !== newUrl) {
      dispatch(push(newUrl));
    }
  };
};

export const fetchSeriesSearch = (search, page) => {
  const newUrl = `/search/series/page/${page}?search=${search}`;

  return dispatch => {
    fetch(Views.seriesSearch(search, page), {
      method: 'GET',
      headers: authHeader()
    })
      .then(responseStatus)
      .then(responseJSON)
      .then(data => {
        dispatch({ type: FETCH_SERIES_SEARCH, data: data, page: page });
      })
      .catch(error => {
        dispatch(fetchError(error));
      });
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
