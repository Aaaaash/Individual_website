import {
  SET_AUTH_INFO,
  CHANGE_NAV_ACTIVE,
} from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  authInfo: {
    id: '',
    name: '',
    email: '',
    avatar: '',
    vio: '',
    gender: '',
  },
  navActive: 0,
});

function indexReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_INFO:
      return state.mergeDeep(fromJS({ authInfo: action.data }));
    case CHANGE_NAV_ACTIVE:
      return state.set('navActive', action.val);
    default:
      return state;
  }
}

export default indexReducer;
