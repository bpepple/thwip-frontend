/* import history from '../components/History'; */
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

export const signinUser = ({ username, password }) => {
  let url = process.env.REACT_APP_API_URL + '/api-token-auth/';

  return dispatch => {
    /* Submit the username/password to the server */
    fetch(url, {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: 'username=' + username + '&password=' + password
    })
      .then(response => {
        if (response.status !== 200) {
          console.error('Something went wrong');
        }
        return response.json();
      })
      .then(data => {
        // if request is good...
        // - update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });

        // - save the jwt token
        localStorage.setItem('token', data.token);

        // - redirect to the route '/series/page/1'
        /* history.push('/series/page/1'); */
      })
      .catch(() => {
        // if request is bad...
        // - show an error to the user
        dispatch(authError('Failed to login'));
      });
  };
};

export const authError = error => {
  return {
    type: AUTH_ERROR,
    payload: error
  };
};

export const signoutUser = () => {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
};
