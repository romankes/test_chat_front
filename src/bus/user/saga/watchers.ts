import {SagaIterator} from 'redux-saga';
import {all, call, takeEvery} from 'redux-saga/effects';
import {types} from '../types';
import {fetchDetail} from './workers';
function* watchFetchDetail(): SagaIterator {
  yield takeEvery(types.FETCH_DETAIL, fetchDetail);
}

export function* watchUser(): SagaIterator {
  yield all([call(watchFetchDetail)]);
}
