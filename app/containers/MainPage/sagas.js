import {
  FETCH_AUTH_INFO,
} from './constants';
import { setAuthInfo, showGlobalPrompt } from './actions';
import indexApi from './indexApi';

import { takeLatest } from 'redux-saga';
import { fork, take, call, put, select } from 'redux-saga/effects';

export function* fetchAuthInfo() {
  try {
    const data = yield call(indexApi.fetchAuth);
    yield put(setAuthInfo({
      id: data._id,
      name: data.name,
      bio: data.bio,
      avatar: data.avatar,
      email: data.email,
      gender: data.gender,
    }));
  } catch (err) {
    yield put(showGlobalPrompt({ open: true, type: 'default', timeout: 3000, message: err.message }));
  }
}

export function* watcherFetch() {
  yield* takeLatest(FETCH_AUTH_INFO, fetchAuthInfo);
}

export function* root() {
  yield fork(watcherFetch);
}

export default [
  root,
];
