import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {types} from '../../types';
import {apiAuth} from '../../api';
import {authActions} from '../../slice';

export function* fetchToken(): SagaIterator {
  try {
    const response: string = yield call(apiAuth.fetchToken);

    if (response) {
      yield put(authActions.saveToken(response));
    }
  } catch (e) {
    console.log(`error aa worker ${e}`);
  } finally {
    yield put({type: types.END_FETCH_TOKEN});
  }
}
