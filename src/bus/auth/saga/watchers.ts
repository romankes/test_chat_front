import {SagaIterator} from 'redux-saga';
import {all, call, takeEvery} from 'redux-saga/effects';
import {types} from '../types';
import {logout, signIn, signUp} from './workers';

function* watchSignIn(): SagaIterator {
  yield takeEvery(types.SIGN_IN, signIn);
}
function* watchSignUp(): SagaIterator {
  yield takeEvery(types.SIGN_UP, signUp);
}

function* watchLogout(): SagaIterator {
  yield takeEvery(types.LOGOUT, logout);
}

export function* watchAuth() {
  yield all([call(watchSignIn), call(watchSignUp), call(watchLogout)]);
}
