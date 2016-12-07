import {
  FETCH_ALL_ARTICLE
} from './constants';
import contentApi from './contentApi';

import { takeLatest } from 'redux-saga';
import { fork, take, call, put, select } from 'redux-saga/effects';

export function* fetchAllArticle() {
  try {
    const response = yield call(contentApi.fetchArticle);
    console.log(response);
  } catch(err) {
    console.log(err.message);
  }
}

export function* watcherFetch() {
  yield* takeLatest(FETCH_ALL_ARTICLE, fetchAllArticle);
}

export function* root() {
  yield fork(watcherFetch);
}

export default [
  root,
];
