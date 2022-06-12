import {navigate} from './../../../../navigation/RootNavigation';
import {CreateItemAsync} from '../../types';
import {uiActions} from '@/bus/ui';
import {AxiosResponse} from 'axios';
import {SagaIterator} from 'redux-saga';
import {all, call, put} from 'redux-saga/effects';
import {apiRoom} from '../../api';
import {Room} from '../../namespace';
import {roomActions} from '../../slice';
import {Routes} from '@/navigation';

export function* createItem(action: CreateItemAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'room', loading: true}));

    const response: AxiosResponse<Room.ResCreateItem> = yield call(
      apiRoom.createItem,
      action.payload,
    );

    if (response.data) {
      yield all([
        put(roomActions.createItem(response.data)),
        put(roomActions.clearUsers()),
      ]);

      navigate(Routes.ROOM_NAVIGATOR);
    }
  } catch (e) {
    console.log(`error create room item ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'room', loading: false}));
  }
}
