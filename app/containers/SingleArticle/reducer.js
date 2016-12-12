import {
  FETCH_ARTICLE_CONTENT,
  FETCH_ARTICLE_CONTENT_SUCCESS,
  FETCH_ARTICLE_CONTENT_ERROR,
  CHANGE_CURRENT_ARTICLE,
} from './constants';

import { fromJS } from 'immutable';

const initialState = fromJS({
  currentArticle: {
    id: '',
    tags: '',
    content: '',
    author: '',
    createAt: '',
  },
  err: '',
  requesting: false,
});
function articleContentReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_ARTICLE:
      return state.mergeDeep(fromJS({ currentArticle: action.val }));
    case FETCH_ARTICLE_CONTENT:
      return state.set('requesting', true);
    case FETCH_ARTICLE_CONTENT_SUCCESS:
      return state.mergeDeep(fromJS({ currentArticle: action.data }))
        .set('requesting', false);
    case FETCH_ARTICLE_CONTENT_ERROR:
      return state.set('err', action.err)
        .set('requesting', false);
    default:
      return state;
  }
}

export default articleContentReducer;
