import { FETCH_MOVIE_LIST } from './constants';
import {
  fetchMovieListSuccess,
  fetchMovieListError,
} from './actions';
import homtApi from './homeApi';

import { takeLatest } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';

export function* fetchMovieList() {
  try {
    const data = yield call(homtApi.fetchMovieList);
    yield put(fetchMovieListSuccess(data));
  } catch (err) {
    yield put(fetchMovieListError(err));
  } finally {
    yield put(fetchMovieListError('请求失败'));
  }
}

export function* watchFetchMovie() {
  yield takeLatest(FETCH_MOVIE_LIST, fetchMovieList);
}

export function* root() {
  yield fork(watchFetchMovie);
};

export default [
  root,
];
