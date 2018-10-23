import * as actions from '../index.js';
import * as types from '../types.js';

describe('actions', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it('should create an action for an AUTH_ERROR', () => {
    const error = 'Failed to authorize';
    const expectedAction = {
      type: types.AUTH_ERROR,
      payload: error
    };
    expect(actions.authError(error)).toEqual(expectedAction);
  });
  it('should remove token on logoutUser', () => {
    const VALUE = '12345',
      KEY = 'token';
    /* Set a test token value */
    localStorage.setItem(KEY, VALUE);
    expect(localStorage.__STORE__[KEY]).toBe(VALUE);
    expect(localStorage.length).toBe(1);

    /* Let's test that the logoutUser action works */
    actions.logoutUser();
    expect(localStorage.__STORE__).toEqual({});
    expect(localStorage.length).toBe(0);
  });
});
