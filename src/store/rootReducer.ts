import { combineReducers } from 'redux';
import RavenReducer from './raven';

const RootReducer = combineReducers({
  raven: RavenReducer
});

export default RootReducer;