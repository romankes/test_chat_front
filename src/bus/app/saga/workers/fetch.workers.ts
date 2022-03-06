import {appActions} from '@/bus/app';
import {AxiosResponse} from 'axios';
import {apiApp} from './../../api';
import {uiActions} from '@/bus/ui';
import {put, call} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';
import {App} from '@/bus/app';

export function* fetchClose(): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'settings', loading: true}));

    const response: AxiosResponse<App.ResFetchClose> = yield call(
      apiApp.fetchClose,
    );

    if (response.status === 200 && response.data) {
      yield put(appActions.toggleClose(response.data));
    }
  } catch (e) {
    console.log(`error fetch close worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'settings', loading: false}));
  }
}
