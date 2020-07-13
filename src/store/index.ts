import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RavenState } from './raven/types'
import { PigeonState } from './pigeon/types'
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export interface ApplicationState {
  raven: RavenState,
  pigeon: PigeonState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;