import {roomActions} from '@/bus/room';
import {AxiosResponse} from 'axios';
import {all, put, call} from 'redux-saga/effects';
import {apiMessage} from '../../api';
import {Message} from '../../namespace';
import {messageActions} from '../../slice';
import {CreateItemAsync} from '../../types';

export function* createItem(action: CreateItemAsync) {
  try {
    const date = new Date();

    const _id = date.getMilliseconds();

    const message: Message.WaitingItem = {
      _id,
      createdAt: date.toString(),
      text: action.payload.text,
      user: null,
      status: 'waiting',
    };

    yield put(messageActions.createWaitingItem(message));

    const response: AxiosResponse<Message.ResCreateItem> = yield call(
      apiMessage.createItem,
      action.payload,
    );

    if (response.data) {
      yield all([
        put(roomActions.updateLastMessage(response.data.message)),
        put(
          messageActions.confirmItem({
            message: {...response.data.message, status: 'sended'},
            _id,
          }),
        ),
      ]);
    }
  } catch (e) {
    console.log(`error create item ${e}`);
  } finally {
  }
}
