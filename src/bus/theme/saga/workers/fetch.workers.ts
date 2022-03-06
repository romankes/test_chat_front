import {Theme} from '@/bus/theme/namespace';
import {themeActions} from '@/bus/theme';
import {apiTheme} from '@/bus/theme/api';
import {SagaIterator} from 'redux-saga';
import {call, put} from 'redux-saga/effects';

export function* fetchTheme(): SagaIterator {
  try {
    const response: string = yield call(apiTheme.fetchTheme);

    if (response) {
      yield put(themeActions.changeTheme((response as Theme.Theme) || 'light'));
    }
  } catch (e) {
    console.log(`error fetch theme ${e}`);
  }
}
