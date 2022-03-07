import {all, put, call, take} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {types} from '../../types';
import {apiAuth} from '../../api';
import {authActions} from '../../slice';
import {userActions} from '@/bus/user';

export function* logout(): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'logout', loading: true}));

    const response = yield call(apiAuth.logout);

    yield put(authActions.clearAsync());

    yield take(types.END_CLEAR);
  } catch (e) {
    console.log(`error logout worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'logout', loading: false}));
  }
}

export function* clear(): SagaIterator {
  try {
    const response = yield call(apiAuth.saveToken, '');

    if (response) {
      yield all([
        put(authActions.clearToken()),
        put(userActions.clearDetail()),
      ]);
    }
  } catch (e) {
    console.log(`error clear worker ${e}`);
  } finally {
    yield put({type: types.END_CLEAR});
  }
}
