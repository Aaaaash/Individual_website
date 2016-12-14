import {
  SET_AUTH_INFO,
  CHANGE_NAV_ACTIVE,
  FETCH_ALL_ARTICLE,
  FETCH_ALL_ARTICLE_SUCCESS,
  FETCH_ALL_ARTICLE_ERROR,
  CHANGE_SEARCH_TITLE,
} from './constants';
import { fromJS, List } from 'immutable';

const initialState = fromJS({
  authInfo: {
    id: '',
    name: '',
    email: '',
    avatar: '',
    vio: '',
    gender: '',
  },
  articleList: [],
  navActive: 0,
  searchTitle: '',
  requesting: false,
});

function indexReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_INFO:
      return state.mergeDeep(fromJS({ authInfo: action.data }));
    case CHANGE_NAV_ACTIVE:
      return state.set('navActive', action.val);
    case FETCH_ALL_ARTICLE:
      return state.set('requesting', true);
    case FETCH_ALL_ARTICLE_SUCCESS:
      return state.set('articleList', new List(action.data))
        .set('requesting', false);
    case FETCH_ALL_ARTICLE_ERROR:
      return state.set('requesting', false)
        .set('err', action.err);
    case CHANGE_SEARCH_TITLE:
      return state.set('searchTitle', action.val);
    default:
      return state;
  }
}

export default indexReducer;
