import {
  FETCH_ARTICLE_CONTENT,
  SUBMIT_COMMENT,
} from './constants';
import {
  fetchArticleContentSuc,
  fetchArticleContentErr,
  submitCommentSuc,
  submitCommentErr,
} from './actions';
import {
  selectCurrentArticle,
  selectComments,
} from './selector';
import articleApi from './articleApi';

import { takeLatest } from 'redux-saga';
import { fork, call, put, select } from 'redux-saga/effects';

export function* fetchArticleContent() {
  try {
    const { id } = yield select(selectCurrentArticle());
    const response = yield call(articleApi.fetchArticle, id);
    yield put(fetchArticleContentSuc(response));
  } catch (err) {
    yield put(fetchArticleContentErr(err.message));
  }
}

export function* submitComment() {
  try {
    const {
      nickname,
      personalWebsite,
      commentContent,
    } = yield select(selectComments());
    const { id } = yield select(selectCurrentArticle());
    const response = yield call(
      articleApi.submitComment,
      nickname,
      personalWebsite,
      commentContent,
      id,
    );
    yield put(submitCommentSuc(response));
  } catch (err) {
    yield put(submitCommentErr(err.message));
  }
}

export function* watcherFetchContent() {
  yield fork(takeLatest, FETCH_ARTICLE_CONTENT, fetchArticleContent);
}

export function* watcherSubmitComment() {
  yield fork(takeLatest, SUBMIT_COMMENT, submitComment);
}

export default [
  watcherFetchContent,
  watcherSubmitComment,
];
