import {
  PUSH_ARTICLE,
  FETCH_PRIVATE_ARTICLE,
} from './constants';
import {
  pushArticleSuccess,
  pushArticleError,
  fetchPrivateArticle,
  changeArticleInfo,
  changePrivateArticle,
  changeHightlightCurrent,
} from './actions';
import {
  selectAuthInfo,
  selectArticleInfo,
} from './selector';
import articleApi from './articleApi';

import { takeLatest } from 'redux-saga';
import { fork, call, put, select } from 'redux-saga/effects';

export function* pushArticle() {
  try {
    const { name } = yield select(selectAuthInfo());
    const {
      title,
      tags,
      content,
      published,
    } = yield select(selectArticleInfo());
    yield call(articleApi.pushArticle, title, tags, content, name, published);
    yield put(pushArticleSuccess());
    yield put(fetchPrivateArticle());
    yield put(changeArticleInfo({
      title: '',
      tags: '',
      content: '',
    }));
  } catch (err) {
    console.log(err.message);
    yield put(pushArticleError());
  }
}

export function* fetchPrivateArticleList() {
  try {
    const response = yield call(articleApi.fetchPrivate);
    yield put(changePrivateArticle(response));
    yield put(changeHightlightCurrent(response[0]._id));
  } catch (err) {
    console.log(err.message);
  }
}

export function* watcherPush() {
  yield fork(takeLatest, PUSH_ARTICLE, pushArticle);
}

export function* watcherFetch() {
  yield fork(takeLatest, FETCH_PRIVATE_ARTICLE, fetchPrivateArticleList );
}

export default [
  watcherPush,
  watcherFetch,
];
