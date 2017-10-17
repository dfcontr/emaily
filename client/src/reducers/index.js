import { combineReducers } from 'redux';
import authReducer from './authReducer';

// State object keys
export default combineReducers({
  auth: authReducer
});
