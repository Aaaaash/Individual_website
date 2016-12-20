import {
  FETCH_ARCHIVES_LIST,
  FETCH_ARCHIVES_LIST_SUC,
} from './constants';

import { fromJS, List } from 'immutable';

const initialState = fromJS({
  archivesList: [],
  requesting: false,
  err: '',
});

function archivesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARCHIVES_LIST:
      return state.set('requesting', true);
    case FETCH_ARCHIVES_LIST_SUC:
      return state.set('archivesList', new List(action.data))
        .set('requesting', false);
    default:
      return state;
  }
}

export default archivesReducer;
