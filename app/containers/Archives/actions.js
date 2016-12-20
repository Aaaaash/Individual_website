import {
  FETCH_ARCHIVES_LIST,
  FETCH_ARCHIVES_LIST_SUC,
} from './constants';

export function fetchArchivesList() {
  return {
    type: FETCH_ARCHIVES_LIST,
  };
}

export function fetchArchivesListSuc(data) {
  return {
    type: FETCH_ARCHIVES_LIST_SUC,
    data,
  };
}
