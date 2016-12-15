import {
  CHANGE_ARTICLE_INFO,
  PUSH_ARTICLE,
  PUSH_ARTICLE_SUCCESS,
  PUSH_ARTICLE_ERROR,
} from './constants';

import { fromJS } from 'immutable';

const initialState = fromJS({
  articleInfo: {
    title: '',
    tags: '',
    content: '',
    published: true,
  },
  requesting: false,
  err: '',
});

function articleReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ARTICLE_INFO:
      return state.mergeDeep(fromJS({ articleInfo: action.info }));
    case PUSH_ARTICLE:
      return state.set('requesting', true);
    case PUSH_ARTICLE_SUCCESS:
      return state.set('requesting', false);
    case PUSH_ARTICLE_ERROR:
      return state.set('requesting', false);
    default:
      return state;
  }
}
export default articleReducer;
