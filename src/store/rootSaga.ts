import { all, takeLatest } from 'redux-saga/effects';

import { RavenTypes } from '@/store/raven/types';
import { PigeonTypes } from '@/store/pigeon/types';
import { loadRaven } from './raven/sagas';
import { loadPigeon } from './pigeon/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(RavenTypes.LOAD_REQUEST, loadRaven),
    takeLatest(PigeonTypes.LOAD_REQUEST, loadPigeon)
  ]);
}