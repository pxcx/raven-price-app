import { combineReducers } from 'redux';
import RavenReducer from './raven';
import PigeonReducer from './pigeon';

const rootReducer = combineReducers({
  raven: RavenReducer,
  pigeon: PigeonReducer
});

export default rootReducer;