import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';

// State object keys
export default combineReducers({
  auth: authReducer,
  form: reduxForm
});
