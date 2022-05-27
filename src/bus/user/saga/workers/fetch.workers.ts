import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {types} from '../../types';
import {apiUser} from '../../api';
import {AxiosResponse} from 'axios';
import {User} from '../../namespace';
import {userActions} from '../../slice';

export function* fetchDetail(): SagaIterator {
  try {
    const response: AxiosResponse<User.ResFetchDetail> = yield call(
      apiUser.fetchDetail,
    );

    console.log(response.data);

    if (response.data.user) {
      yield put(userActions.saveDetail(response.data.user));
    }
  } catch (e) {
    console.log(`error fetch user detail worker ${e}`);
  } finally {
    yield put({type: types.END_FETCH_DETAIL});
  }
}
