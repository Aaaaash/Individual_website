import {
  FETCH_ARTICLE_CONTENT,
  FETCH_ARTICLE_CONTENT_SUCCESS,
  FETCH_ARTICLE_CONTENT_ERROR,
  CHANGE_CURRENT_ARTICLE,
  CHANGE_COMMENT_INFO,
  FETCH_COMMENTS_LIST_SUCCESS,
} from './constants';

import { fromJS, List } from 'immutable';

const initialState = fromJS({
  currentArticle: {
    id: '',
    tags: '',
    content: '',
    author: '',
    createAt: '',
  },
  comment: {
    nickname: '',
    personalWebsite: '',
    commentContent: '',
  },
  comments: [],
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
    case CHANGE_COMMENT_INFO:
      return state.mergeDeep(fromJS({ comment: action.val }));
    case FETCH_COMMENTS_LIST_SUCCESS:
      return state.set('comments', new List(action.data));
    default:
      return state;
  }
}

export default articleContentReducer;
