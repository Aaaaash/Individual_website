import {
  CHANGE_MENU_STATE,
} from './constants';

import { fromJS } from 'immutable';

const initialState = fromJS({
  menuOpen: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MENU_STATE:
      return state.set('menuOpen', action.val);
    default:
      return state;
  }
}

export default homeReducer;
