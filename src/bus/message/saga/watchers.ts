import {SagaIterator} from 'redux-saga';
import {all, call, takeEvery} from 'redux-saga/effects';
import {types} from '../types';

import {createItem, processItem} from './workers';
function* watchCreateItem(): SagaIterator {
  yield takeEvery(types.CREATE_ITEM, createItem);
}

function* watchProcessItem(): SagaIterator {
  yield takeEvery(types.PROCESS_ITEM, processItem);
}

export function* watchMessage(): SagaIterator {
  yield all([call(watchCreateItem), call(watchProcessItem)]);
}
