import {
  AUTH_SEND_REQUEST
} from './constants';
import auth from './auth';
import { showGlobalPrompt } from './actions';
import { selectAuthBaseInfo } from './selector';

import { push } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { fork, take, call, put, select } from 'redux-saga/effects';

export function* authLogin() {
  try {
    const { account, password } = yield select(selectAuthBaseInfo());
    const data = yield call(auth.login, account, password);
    if (data.code === 0) {
      yield put(push('/index'));
    }
  } catch (err) {
    yield put(showGlobalPrompt({ open: true, type: 'default', timeout: 3000, message: err.message }));
  }
}

export function* watcherLogin() {
  yield* takeLatest(AUTH_SEND_REQUEST, authLogin);
}

export function* root() {
  yield fork(watcherLogin);
}

export default [
  root,
]
