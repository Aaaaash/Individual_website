import {
  CHANGE_AUTH_ACCOUNT_INFO,
  AUTH_INPUT_ERROR,
  AUTH_SEND_REQUEST,
  SET_LOGEDIN_STATE,
  CHANGE_REGISTER_INFO,
  SUBMIT_AUTH_REGISTER,
  SUBMIT_AUTH_REGISTER_SUCCESS,
  SUBMIT_AUTH_REGISTER_ERROR,
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
  authRegisterInfo: {
    email: '',
    password: '',
    repsd: '',
    nickname: '',
    sex: '',
    bio: '',
    avatar: '',
  },
  isLogin: true,
  logedIn: false,
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
    case SET_LOGEDIN_STATE:
      return state.set('logedIn', action.state);
    case CHANGE_REGISTER_INFO:
      return state.mergeDeep(fromJS({ authRegisterInfo: action.val }));
    case SUBMIT_AUTH_REGISTER:
      return state.set('loading', true);
    case SUBMIT_AUTH_REGISTER_SUCCESS:
    case SUBMIT_AUTH_REGISTER_ERROR:
      return state.set('loading', false);
    default:
      return state;
  }
}

export default authReducer;
