import {
  CHANGE_AUTH_ACCOUNT_INFO,
  AUTH_INPUT_ERROR,
  AUTH_SEND_REQUEST,
} from './constants';

import { fromJS } from 'immutable';

const initialState = fromJS({
  authBaseInfo: {
    account: '',
    password: '',
  },
  authBaseError: {
    accountErr: 'test',
    passwordErr: 'test',
  },
  loading: false,
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_AUTH_ACCOUNT_INFO:
      return state.mergeDeep(fromJS({ authBaseInfo: action.val }));
    case AUTH_INPUT_ERROR:
      return state.mergeDeep(fromJS({ authBaseError: action.err }));
    case AUTH_SEND_REQUEST:
      return state.set('loading', true);
    default:
      return state;
  }
}

export default authReducer;