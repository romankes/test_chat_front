import {all, takeEvery, call, takeLatest} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';
import {types} from '../types';

import {bootstrap, fetchClose} from './workers';

function* watchBootstarp(): SagaIterator {
  yield takeLatest(types.BOOTSTRAP, bootstrap);
}

function* watchFetchClose(): SagaIterator {
  yield takeEvery(types.FETCH_CLOSE, fetchClose);
}

export function* watchApp(): SagaIterator {
  yield all([call(watchBootstarp), call(watchFetchClose)]);
}
