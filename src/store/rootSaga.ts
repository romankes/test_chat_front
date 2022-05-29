import {all, call} from 'redux-saga/effects';

//watchers

import {watchApp} from '@/bus/app/saga/watchers';
import {watchTheme} from '@/bus/theme/saga/watcher';
import {watchAuth} from '@/bus/auth/saga/watchers';
import {watchUser} from '@/bus/user/saga/watchers';
import {watchRoom} from '@/bus/room/saga/watchers';
import {watchMessage} from '@/bus/message/saga/watchers';

function* rootSaga() {
  try {
    yield all([
      call(watchApp),
      call(watchTheme),
      call(watchAuth),
      call(watchUser),
      call(watchRoom),
      call(watchMessage),
    ]);
  } catch (error) {
    console.error('⛔️ error', error);
  }
}

export default rootSaga;
