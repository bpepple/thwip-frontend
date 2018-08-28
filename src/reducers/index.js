import { combineReducers } from 'redux';
import { reducer as authReducer } from './auth';
import { reducer as fetchReducer } from './fetch';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  fetch: fetchReducer
});

export default rootReducer;
