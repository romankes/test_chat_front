import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {FetchItemsAsync, types} from '../../types';
import {apiUser} from '../../api';
import {AxiosResponse} from 'axios';
import {User} from '../../namespace';
import {userActions} from '../../slice';
import {authActions} from '@/bus/auth';

export function* fetchItems(action: FetchItemsAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'user', loading: false}));

    const response: AxiosResponse<User.ResFetchItems> = yield call(
      apiUser.fetchItems,
      action.payload,
    );

    if (response.data) {
      yield put(
        userActions.saveItems({
          ...response.data,
          currentPage: action.payload.page,
          per: action.payload.per,
        }),
      );
    }
  } catch (e) {
    console.log(`error fetch items ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'user', loading: false}));
  }
}

export function* fetchDetail(): SagaIterator {
  try {
    const response: AxiosResponse<User.ResFetchDetail> = yield call(
      apiUser.fetchDetail,
    );

    if (response.data.user) {
      yield all([
        put(userActions.saveDetail(response.data.user)),
        put(authActions.toggleloggined(true)),
      ]);
    }
  } catch (e) {
    console.log(`error fetch user detail worker ${e}`);
  } finally {
    yield put({type: types.END_FETCH_DETAIL});
  }
}
