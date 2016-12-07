import {
  PUSH_ARTICLE,
} from './constants';
import {
  pushArticleSuccess,
  pushArticleError,
} from './actions';
import {
  selectAuthInfo,
  selectArticleInfo,
} from './selector';
import articleApi from './articleApi';

import { takeLatest } from 'redux-saga';
import { fork, take, call, put, select } from 'redux-saga/effects';

export function* pushArticle() {
  try {
    const { name } = yield select(selectAuthInfo());
    const { title, tags, content } = yield select(selectArticleInfo());
    yield call(articleApi.pushArticle, title, tags, content, name);
    yield put(pushArticleSuccess());
  } catch (err) {
    console.log(err.message);
    yield put(pushArticleError());
  }
}

export function* watcherPush() {
  yield* takeLatest(PUSH_ARTICLE, pushArticle);
}

export function* root() {
  yield fork(watcherPush);
}

export default [
  root,
];
