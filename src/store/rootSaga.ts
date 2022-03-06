import {all, call} from 'redux-saga/effects';

//watchers

import {watchApp} from '@/bus/app/saga/watchers';
import {watchTheme} from '@/bus/theme/saga/watcher';

function* rootSaga() {
  try {
    yield all([call(watchApp), call(watchTheme)]);
  } catch (error) {
    console.error('⛔️ error', error);
  }
}

export default rootSaga;
