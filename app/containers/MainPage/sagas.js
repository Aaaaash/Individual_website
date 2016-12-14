import {
  FETCH_AUTH_INFO,
  FETCH_ALL_ARTICLE,
} from './constants';
import {
  selectSearchTitle,
} from './selector';
import {
  setAuthInfo,
  showGlobalPrompt,
  fetchAllArticleSuc,
  fetchAllArticleErr,
} from './actions';
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

export function* watcherFetchAuth() {
  yield fork(takeLatest, FETCH_AUTH_INFO, fetchAuthInfo);
}


export function* fetchAllArticle() {
  try {
    const title = yield select(selectSearchTitle());
    const response = yield call(indexApi.fetchArticle, title);
    yield put(fetchAllArticleSuc(response));
  } catch (err) {
    yield put(fetchAllArticleErr(err.message));
  }
}

export function* watcherFetchArticle() {
  yield fork(takeLatest, FETCH_ALL_ARTICLE, fetchAllArticle);
}

export default [
  watcherFetchAuth,
  watcherFetchArticle,
];
