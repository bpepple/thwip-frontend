import * as actions from '../index.js';
import * as types from '../types.js';

describe('actions', () => {
  it('should create an action for an AUTH_ERROR', () => {
    const error = 'Failed to authorize';
    const expectedAction = {
      type: types.AUTH_ERROR,
      payload: error
    };
    expect(actions.authError(error)).toEqual(expectedAction);
  });
});
