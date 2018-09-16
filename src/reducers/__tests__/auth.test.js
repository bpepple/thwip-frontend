import { reducer } from '../auth';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../../actions/types';

describe('auth reducer', () => {
  // Test the reducer default switch value.
  it('is correct', () => {
    const action = { type: 'dummy_action' };
    const initialState = {};
    expect(reducer(undefined, action)).toEqual(initialState);
  });
  it('authenticated user', () => {
    const beforeState = {};
    const action = { type: AUTH_USER };
    const afterState = reducer(beforeState, action);

    expect(afterState).toEqual({ error: '', authenticated: true });
  });
  it('unauthenticated user', () => {
    const beforeState = {};
    const action = { type: UNAUTH_USER };
    const afterState = reducer(beforeState, action);

    expect(afterState).toEqual({ authenticated: false });
  });
  it('authentication error', () => {
    const beforeState = {};
    const action = { type: AUTH_ERROR, payload: 'failed' };
    const afterState = reducer(beforeState, action);

    expect(afterState).toEqual({ error: 'failed' });
  });
});
