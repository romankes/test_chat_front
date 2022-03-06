import {themeActions} from '@/bus/theme';
import {apiTheme} from '@/bus/theme/api';
import {ChangeThemeAsync} from '@/bus/theme/types';
import {SagaIterator} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
export function* changeTheme(action: ChangeThemeAsync): SagaIterator {
  try {
    const response: boolean = yield call(apiTheme.setTheme, action.payload);

    if (response) {
      yield put(themeActions.changeTheme(action.payload));
    }
  } catch (e) {
    console.log(`error theme worker ${e}`);
  }
}
