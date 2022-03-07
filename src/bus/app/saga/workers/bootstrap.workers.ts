import {all, put, select, take} from 'redux-saga/effects';
import {appActions, appSelectors} from '@/bus/app';
import {SagaIterator} from 'redux-saga';
import {themeActions} from '@/bus/theme';
import {types as themeTypes} from '@/bus/theme/types';

import {authActions, authSelectors} from '@/bus/auth';
import {types as authTypes} from '@/bus/auth/types';

import {userActions} from '@/bus/user';
import {types as userTypes} from '@/bus/user/types';

export function* bootstrap(): SagaIterator {
  try {
    yield all([
      put(themeActions.fetchThemeAsync()),
      put(authActions.fetchTokenAsync()),
    ]);

    yield all([
      take(authTypes.END_FETCH_TOKEN),
      take(themeTypes.END_FETCH_THEME),
    ]);

    const token: string | null = yield select(authSelectors.getToken);

    if (token) {
      yield put(userActions.fetchDetailAsync());

      yield take(userTypes.END_FETCH_DETAIL);
    }
  } catch (e) {
    console.log(`error app bootstrap worker ${e}`);
  } finally {
    yield put(appActions.toggleInitialized(true));
  }
}
