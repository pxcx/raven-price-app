import { createStore, Store } from 'redux';
import { RavenState } from './raven/types'
import RootReducer from './rootReducer';

export interface ApplicationState {
  raven: RavenState
}

const store: Store<ApplicationState> = createStore(RootReducer);

export default store;