import {roomSelectors, Room} from '@/bus/room';
import {put, select} from 'redux-saga/effects';
import {messageActions} from '../../slice';
import {ProcessItemAsync} from '../../types';

export function* processItem(action: ProcessItemAsync) {
  try {
    const detail: Room.Detail | null = yield select(roomSelectors.getDetail);

    if (detail) {
      if (action.payload.room === detail._id) {
        yield put(
          messageActions.confirmItem({_id: -1, message: action.payload}),
        );
      }
    }
  } catch (e) {
    console.log(`error process message item worker ${e}`);
  }
}
