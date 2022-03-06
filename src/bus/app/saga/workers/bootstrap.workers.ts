import {all, put, select} from 'redux-saga/effects';
import {appActions, appSelectors} from '@/bus/app';
import {SagaIterator} from 'redux-saga';
import {BootstrapAsync} from '@/bus/app/types';
import {themeActions} from '@/bus/theme';

export function* bootstrap(action: BootstrapAsync): SagaIterator {
  try {
    yield all([put(themeActions.fetchThemeAsync())]);
  } catch (e) {
    console.log(`error app bootstrap worker ${e}`);
  } finally {
    yield put(appActions.toggleReady(true));
  }
}
