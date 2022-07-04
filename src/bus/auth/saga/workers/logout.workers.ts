import {all, put, call, take} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {types} from '../../types';
import {apiAuth} from '../../api';
import {authActions} from '../../slice';
import {userActions} from '@/bus/user';
import {navigate, Routes} from '@/navigation';

export function* logout(): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'logout', loading: true}));

    // const response = yield call(apiAuth.logout);

    yield put(authActions.toggleloggined(false));

    navigate(Routes.AUTH_NAVIGATOR);
  } catch (e) {
    console.log(`error logout worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'logout', loading: false}));
  }
}
