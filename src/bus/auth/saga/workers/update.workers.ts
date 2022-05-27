import {SagaIterator} from 'redux-saga';
import {all, call, put} from 'redux-saga/effects';
import {apiAuth} from '../../api';
import {authActions} from '../../slice';
import {types, UpdateTokenAsync} from '../../types';

export function* updateToken(action: UpdateTokenAsync): SagaIterator {
  try {
    const response = yield call(apiAuth.updateToken, action.payload);

    if (response) {
      yield put(authActions.saveToken(action.payload));
    }
  } catch (e) {
    console.log(`error update token worker ${e}`);
  } finally {
    yield put({
      type: types.END_UPDATE_TOKEN,
    });
  }
}
