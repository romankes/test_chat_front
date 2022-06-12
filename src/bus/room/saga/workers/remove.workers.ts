import {uiActions} from '@/bus/ui';
import {AxiosResponse} from 'axios';
import {SagaIterator} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {apiRoom} from '../../api';
import {Room} from '../../namespace';
import {roomActions} from '../../slice';
import {RemoveItemAsync} from '../../types';

export function* removeItem(action: RemoveItemAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'room', loading: true}));

    const response: AxiosResponse<Room.ResRemoveItem> = yield call(
      apiRoom.removeItem,
      action.payload,
    );

    if (response.data) {
      yield put(roomActions.removeItem(response.data));
    }
  } catch (e) {
    console.log(`error remove room item worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'room', loading: false}));
  }
}
