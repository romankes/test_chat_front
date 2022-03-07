import {all, takeEvery, call, takeLatest} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';
import {types} from '../types';

import {bootstrap} from './workers';

function* watchBootstarp(): SagaIterator {
  yield takeLatest(types.BOOTSTRAP, bootstrap);
}

export function* watchApp(): SagaIterator {
  yield all([call(watchBootstarp)]);
}
