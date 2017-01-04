import {
  AUTH_SEND_REQUEST,
  SUBMIT_AUTH_REGISTER,
} from './constants';
import auth from './auth';
import {
  showGlobalPrompt,
  setLogedInState,
  submitRegisterSuc,
  submitRegisterErr,
} from './actions';
import { selectAuthBaseInfo, selectRegisterInto } from './selector';

import { push } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { fork, call, put, select } from 'redux-saga/effects';

export function* authLogin() {
  try {
    const { account, password } = yield select(selectAuthBaseInfo());
    yield call(auth.login, account, password);
    yield put(setLogedInState(true));
    yield put(push('/'));
  } catch (err) {
    yield put(showGlobalPrompt({ open: true, type: 'default', timeout: 3000, message: err.message }));
  }
}

export function* authRegister() {
  try {
    const {
      email,
      password,
      repsd,
      nickname,
      sex,
      bio,
      avatar,
    } = yield select(selectRegisterInto());
    yield call(
      auth.register,
      email,
      password,
      repsd,
      nickname,
      sex,
      bio,
      avatar,
    );
  } catch (err) {
    yield put(showGlobalPrompt({ open: true, type: 'default', timeout: 3000, message: err.message }));
  }
}
export function* watcherLogin() {
  yield fork(takeLatest, AUTH_SEND_REQUEST, authLogin);
}

export function* watchterRegister() {
  yield fork(takeLatest, SUBMIT_AUTH_REGISTER, authRegister);
}

export default [
  watcherLogin,
  watchterRegister,
];
