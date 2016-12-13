import {
  FETCH_ARTICLE_CONTENT,
  SUBMIT_COMMENT,
  FETCH_COMMENTS_LIST,
} from './constants';
import {
  fetchArticleContentSuc,
  fetchArticleContentErr,
  submitCommentSuc,
  submitCommentErr,
  changeCommentInfo,
  fetchCommentsListSuc,
  fetchCommentsListErr,
} from './actions';
import {
  selectCurrentArticle,
  selectComment,
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
    } = yield select(selectComment());
    const { id } = yield select(selectCurrentArticle());
    yield call(
      articleApi.submitComment,
      nickname,
      personalWebsite,
      commentContent,
      id,
    );
    yield put(changeCommentInfo({
      nickname: '',
      personalWebsite: '',
      commentContent: '',
    }));
    yield call(fetchCommentsList);
  } catch (err) {
    yield put(submitCommentErr(err.message));
  }
}

export function* fetchCommentsList() {
  try {
    const { id } = yield select(selectCurrentArticle());
    const response = yield call(articleApi.fetchComments, id);
    yield put(fetchCommentsListSuc(response.data));
  } catch (err) {
    yield put(fetchCommentsListErr(err.message));
  }
}

export function* watcherFetchContent() {
  yield fork(takeLatest, FETCH_ARTICLE_CONTENT, fetchArticleContent);
}

export function* watcherSubmitComment() {
  yield fork(takeLatest, SUBMIT_COMMENT, submitComment);
}

export function* watcherFetchComments() {
  yield fork(takeLatest, FETCH_COMMENTS_LIST, fetchCommentsList);
}

export default [
  watcherFetchContent,
  watcherSubmitComment,
  watcherFetchComments,
];
