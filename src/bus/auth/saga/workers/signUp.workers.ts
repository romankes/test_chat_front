import {all, put, call, take} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {SignUpAsync, types} from '../../types';
import {AxiosResponse} from 'axios';
import {Auth} from '../../namespace';
import {apiAuth} from '../../api';
import {authActions} from '../../slice';
import {types as userTypes} from '@/bus/user/types';
import {userActions} from '@/bus/user';

export function* signUp(action: SignUpAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'sign_up', loading: true}));

    const response: AxiosResponse<Auth.ResSignUp> = yield call(
      apiAuth.signUp,
      action.payload,
    );

    if (response.data.token) {
      yield put(authActions.updateTokenAsync(response.data.token));
      yield take(types.END_UPDATE_TOKEN);

      yield put(userActions.fetchDetailAsync());
      yield take(userTypes.END_FETCH_DETAIL);
    }
  } catch (e) {
    console.log(`error sign up worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'sign_up', loading: false}));
  }
}
