import {SagaIterator} from 'redux-saga';
import {all, call, takeEvery} from 'redux-saga/effects';
import {types} from '../types';
import {fetchDetail, fetchItems, updateDetail} from './workers';

function* watchFetchDetail(): SagaIterator {
  yield takeEvery(types.FETCH_DETAIL, fetchDetail);
}

function* watchFetchItems(): SagaIterator {
  yield takeEvery(types.FETCH_ITEMS, fetchItems);
}

function* watchUpdateDetail(): SagaIterator {
  yield takeEvery(types.UPDATE_DETAIL, updateDetail);
}

export function* watchUser(): SagaIterator {
  yield all([
    call(watchFetchDetail),
    call(watchUpdateDetail),
    call(watchFetchItems),
  ]);
}
