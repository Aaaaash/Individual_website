import {
  FETCH_MOVIE_LIST,
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_MOVIE_LIST_ERROR,
} from './constants';

export function fetchMovieList() {
  return {
    type: FETCH_MOVIE_LIST,
  };
}

export function fetchMovieListSuccess(data) {
  return {
    type: FETCH_MOVIE_LIST_SUCCESS,
    data,
  };
}

export function fetchMovieListError(err) {
  return {
    type: FETCH_MOVIE_LIST_ERROR,
    err,
  };
}
