import {navigate, Routes} from '@/navigation';
import {AxiosResponse} from 'axios';
import {SagaIterator} from 'redux-saga';
import {all, call, put} from 'redux-saga/effects';
import {apiUser} from '../../api';
import {User} from '../../namespace';
import {UpdateDetailAsync} from '../../types';

export function* updateDetail(action: UpdateDetailAsync): SagaIterator {
  try {
    const response: AxiosResponse<User.Detail> = yield call(
      apiUser.updateDetail,
      action.payload,
    );

    navigate(Routes.TABS);
  } catch (e) {
    console.log(`update user detail worker ${e}`);
  } finally {
  }
}
