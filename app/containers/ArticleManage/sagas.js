import {
  PUSH_ARTICLE,
  FETCH_PRIVATE_ARTICLE,
  FETCH_EDITED_ARTICLE,
  DELETE_ARTICLE,
} from './constants';
import {
  pushArticleSuccess,
  pushArticleError,
  fetchPrivateArticle,
  changeArticleInfo,
  changePrivateArticle,
  changeHightlightCurrent,
  fetchFetchEditedSuc,
  changeDialogDelete,
  fetchAllArticle,
} from './actions';
import {
  selectAuthInfo,
  selectArticleInfo,
  selectHighlight,
} from './selector';
import articleApi from './articleApi';

import { takeLatest } from 'redux-saga';
import { fork, call, put, select } from 'redux-saga/effects';

export function* pushArticle() {
  try {
    const { name } = yield select(selectAuthInfo());
    const highlight = yield select(selectHighlight());
    const {
      title,
      tags,
      content,
      published,
    } = yield select(selectArticleInfo());
    if (highlight === '') {
      yield call(articleApi.pushArticle, title, tags, content, name, published);
      yield put(pushArticleSuccess());
      yield put(fetchPrivateArticle());
      yield put(changeArticleInfo({
        title: '',
        tags: '',
        content: '',
      }));
      yield put(fetchFetchEditedSuc());
    } else {
      yield call(articleApi.updateArticle, highlight, title, tags, content, published);
      yield put(fetchFetchEditedSuc());
    }
  } catch (err) {
    console.log(err.message);
    yield put(pushArticleError());
  } finally {
    yield put(fetchAllArticle());
  }
}

export function* fetchPrivateArticleList() {
  try {
    const response = yield call(articleApi.fetchPrivate);
    yield put(changePrivateArticle(response));
    // yield put(changeHightlightCurrent(response[0]._id));
  } catch (err) {
    console.log(err.message);
  }
}

export function* fetchArticleDetail() {
  try {
    const highlight = yield select(selectHighlight());
    const response = yield call(articleApi.fetchArticle, highlight);
    yield put(changeArticleInfo({
      title: response.title,
      tags: response.tags,
      content: response.content,
      published: false,
    }));
    yield put(fetchFetchEditedSuc());
  } catch (err) {
    console.log(err.message);
  }
}

export function* deleteArticle() {
  try {
    const highlight = yield select(selectHighlight());
    yield call(articleApi.deleteArticle, highlight);
    yield put(fetchPrivateArticle());
    yield put(changeDialogDelete(false));
    yield put(changeArticleInfo({
      title: response.title,
      tags: response.tags,
      content: response.content,
      published: false,
    }));
    yield put(fetchAllArticle());
  } catch(err) {
    console.log(err.message);
  }
}

export function* watcherFetchDetail() {
  yield fork(takeLatest, FETCH_EDITED_ARTICLE, fetchArticleDetail);
}

export function* watcherPush() {
  yield fork(takeLatest, PUSH_ARTICLE, pushArticle);
}

export function* watcherFetch() {
  yield fork(takeLatest, FETCH_PRIVATE_ARTICLE, fetchPrivateArticleList);
}

export function* watcherDelete() {
  yield fork(takeLatest, DELETE_ARTICLE, deleteArticle);
}

export default [
  watcherPush,
  watcherFetch,
  watcherDelete,
  watcherFetchDetail,
];
