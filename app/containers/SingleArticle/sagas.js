import {
  FETCH_ARTICLE_CONTENT,
} from './constants';
import {
  fetchArticleContentSuc,
  fetchArticleContentErr,
} from './actions';
import {
  selectCurrentArticle,
} from './selector';
import articleApi from './articleApi';

import { takeLatest } from 'redux-saga';
import { fork, take, call, put, select } from 'redux-saga/effects';

export function* fetchArticleContent() {
  try {
    const { id } = yield select(selectCurrentArticle());
    const response = yield call(articleApi.fetchArticle, id);
    yield put(fetchArticleContentSuc(response));
  } catch (err) {
    yield put(fetchArticleContentErr(err.message));
  }
}

export function* watcherFetchContent() {
  yield fork(takeLatest, FETCH_ARTICLE_CONTENT, fetchArticleContent);
}

export default [
  watcherFetchContent,
];
