import {
  FETCH_ALL_ARTICLE
} from './constants';
import {
  fetchAllArticleSuc,
  fetchAllArticleErr,
} from './actions';
import contentApi from './contentApi';

import { takeLatest } from 'redux-saga';
import { fork, take, call, put, select } from 'redux-saga/effects';

export function* fetchAllArticle() {
  try {
    const response = yield call(contentApi.fetchArticle);
    yield put(fetchAllArticleSuc(response));
  } catch (err) {
    yield put(fetchAllArticleErr(err.message));
  }
}

export function* watcherFetch() {
  yield fork(takeLatest, FETCH_ALL_ARTICLE, fetchAllArticle);
}

export default [
  watcherFetch,
];
