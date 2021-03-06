import { call, put } from 'redux-saga/effects';
import api from '@/services/api';
import { loadSuccess, loadFailure } from './actions';

export function* loadPigeon() {
  try {
    const response = yield call(
      api.get,
      'v1/tools/price-conversion?symbol=PGN&amount=1&convert=BTC'
    );
    yield put(loadSuccess({ toBTC: response.data.data.quote.BTC.price }));
  } catch (error) {
    yield put(loadFailure());
  }
}