import {all, put, select, take} from 'redux-saga/effects';
import {appActions, appSelectors} from '@/bus/app';
import {SagaIterator} from 'redux-saga';
import {themeActions} from '@/bus/theme';
import {types as themeTypes} from '@/bus/theme/types';

import {types as authTypes} from '@/bus/auth/types';

import {userActions} from '@/bus/user';
import {types as userTypes} from '@/bus/user/types';

export function* bootstrap(): SagaIterator {
  try {
    yield all([
      put(themeActions.fetchThemeAsync()),

      put(userActions.fetchDetailAsync()),
    ]);

    yield all([
      take(themeTypes.END_FETCH_THEME),
      take(userTypes.END_FETCH_DETAIL),
    ]);
  } catch (e) {
    console.log(`error app bootstrap worker ${e}`);
  } finally {
    yield put(appActions.toggleInitialized(true));
  }
}
