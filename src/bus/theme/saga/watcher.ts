import {all, call, takeEvery} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';
import {types} from '../types';

import {fetchTheme, changeTheme} from './workers';

function* watchChangeTheme(): SagaIterator {
  yield takeEvery(types.CHANGE_THEME, changeTheme);
}

function* watchFetchTheme(): SagaIterator {
  yield takeEvery(types.FETCH_THEME, fetchTheme);
}

export function* watchTheme(): SagaIterator {
  yield all([call(watchChangeTheme), call(watchFetchTheme)]);
}
