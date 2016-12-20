import {
  FETCH_ARCHIVES_LIST,
} from './constants';
import {
  fetchArchivesListSuc,
} from './actions';
import archivesApi from './archivesApi';

import { takeLatest } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';

export function* fetchArchivesList() {
  try {
    const response = yield call(archivesApi.fetchArchives);
    yield put(fetchArchivesListSuc(response));
  } catch (err) {
    console.log(err.message);
  }
}

export function* watchFetchArchives() {
  yield fork(takeLatest, FETCH_ARCHIVES_LIST, fetchArchivesList);
}

export default [
  watchFetchArchives,
];
