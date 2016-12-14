/*
 * App sagas
 */

import {
  USERINFO_REQUESTING,
} from './constants';
import {
  userinfoRequestSuccess,
  userinfoRequestError,
} from './actions';

import appRequest from './appRequests';
import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork } from 'redux-saga/effects';

export function* requestUserInfo() {
  try {
    yield take(USERINFO_REQUESTING);
  } catch (error) {
    const userInfo = yield call(appRequest.userinfoRequest);
    yield put(userinfoRequestSuccess(userInfo));
  }
}

export default [
  requestUserInfo,
];
