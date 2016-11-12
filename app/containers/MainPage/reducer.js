import { fromJS } from 'immutable';

import {
  FETCH_MOVIE_LIST,
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_MOVIE_LIST_ERROR,
} from './constants';

const initialState = fromJS({
  movieList: [],
  requesting: true,
  error: '',
});

function fixedNavReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_LIST:
      return state.set('requesting', true);
    case FETCH_MOVIE_LIST_SUCCESS:
      return state.set('requesting', false)
        .set('movieList', action.data);
    case FETCH_MOVIE_LIST_ERROR:
      return state.set('requesting', false)
        .set('error', action.err);
    default:
      return state;
  }
}

export default fixedNavReducer;
