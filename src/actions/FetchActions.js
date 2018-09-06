import { FETCH_PUBLISHER_LIST, FETCH_ERROR } from './types';
import { authHeader } from '../components/helpers/auth-header';
import { push } from 'connected-react-router';
// Really should use the history from redux, but for now this works.
import history from '../History';

export const fetchApiList = page => {
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
        // If response is good update the state.
        dispatch({ type: FETCH_PUBLISHER_LIST, data: data });
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
