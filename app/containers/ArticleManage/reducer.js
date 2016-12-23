import {
  CHANGE_ARTICLE_INFO,
  PUSH_ARTICLE,
  PUSH_ARTICLE_SUCCESS,
  PUSH_ARTICLE_ERROR,
  CHANGE_PRIVATE_ARTICLE,
  CHANGE_HIGHLIGHT_CURRENT,
  FETCH_EDITED_ARTICLE,
  FETCH_EDITED_ARTICLE_SUCCESS,
} from './constants';

import { fromJS } from 'immutable';

const initialState = fromJS({
  articleInfo: {
    title: '',
    tags: '',
    content: '',
    published: true,
    loading: false,
  },
  highlight: '',
  privateList: [],
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
    case CHANGE_PRIVATE_ARTICLE:
      return state.mergeDeep(fromJS({ privateList: action.data }));
    case CHANGE_HIGHLIGHT_CURRENT:
      return state.set('highlight', action.id);
    case FETCH_EDITED_ARTICLE:
      return state.setIn(['articleInfo', 'loading'], true);
    case FETCH_EDITED_ARTICLE_SUCCESS:
      return state.setIn(['articleInfo', 'loading'], false);
    default:
      return state;
  }
}
export default articleReducer;
