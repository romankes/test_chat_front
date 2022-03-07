import {userActions} from '@/bus/user';
import {AxiosResponse} from 'axios';
import {all, put, call, take} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {SignInAsync} from '../../types';
import {apiAuth} from '../../api';
import {Auth} from '../../namespace';
import {authActions} from '../../slice';
import {types as userTypes} from '@/bus/user/types';

export function* signIn(action: SignInAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'sign_in', loading: true}));

    const response: AxiosResponse<Auth.ResSignIn> = yield call(
      apiAuth.signIn,
      action.payload,
    );

    if (response.data.token) {
      const isSaved = yield call(apiAuth.saveToken, response.data.token);
      if (isSaved) {
        yield all([
          put(authActions.saveToken(response.data.token)),
          put(userActions.fetchDetailAsync()),
        ]);
        yield take(userTypes.END_FETCH_DETAIL);
      }
    }
  } catch (e) {
    console.log(`error sign in worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'sign_in', loading: false}));
  }
}
