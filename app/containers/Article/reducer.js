import {
  FETCH_ALL_ARTICLE,
  FETCH_ALL_ARTICLE_SUCCESS,
  FETCH_ALL_ARTICLE_ERROR,
} from './constants';

import { fromJS } from 'immutable';

const initialState = fromJS({
  articleList: [],
  requesting: false,
  err: '',
});

function contentReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_ARTICLE:
      return state.set('requesting', true);
    case FETCH_ALL_ARTICLE_SUCCESS:
      return state.set('requesting', false)
        .set('articleList', action.data);
    case FETCH_ALL_ARTICLE_ERROR:
      return state.set('requesting', false)
        .state.set('err', action.err);
    default:
      return state;
  }
}

export default contentReducer;
