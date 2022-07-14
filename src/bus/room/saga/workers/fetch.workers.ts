import {messageActions} from '@/bus/message';
import {uiActions} from '@/bus/ui';
import {AxiosResponse} from 'axios';
import {SagaIterator} from 'redux-saga';
import {all, call, put} from 'redux-saga/effects';
import {apiRoom} from '../../api';
import {Room} from '../../namespace';
import {roomActions} from '../../slice';
import {FetchDetailAsync, FetchItemsAsync} from '../../types';

export function* fetchItems(action: FetchItemsAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'room', loading: true}));

    const response: AxiosResponse<Room.ResFetchItems> = yield call(
      apiRoom.fetchItems,
      action.payload,
    );

    console.log(response.data);

    if (response.data) {
      yield put(
        roomActions.saveItems({...response.data, page: action.payload.page}),
      );
    }
  } catch (e) {
    console.log(`error fetch item worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'room', loading: false}));
  }
}

export function* fetchDetail(action: FetchDetailAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'room', loading: true}));

    yield all([put(messageActions.clearItems())]);

    const response: AxiosResponse<Room.ResFetchDetail> = yield call(
      apiRoom.fetchDetail,
      action.payload,
    );

    if (response.data) {
      yield all([
        put(roomActions.saveDetail(response.data.room)),
        put(
          messageActions.saveItems(
            response.data.room.messages.map((item) => ({
              ...item,
              status: 'sended',
            })),
          ),
        ),
      ]);
    }
  } catch (e) {
    console.log(`error fetch item worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'room', loading: false}));
  }
}
