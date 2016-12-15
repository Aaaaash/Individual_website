import {
  CHANGE_AUTH_ACCOUNT_INFO,
  AUTH_INPUT_ERROR,
  AUTH_SEND_REQUEST,
  SET_LOGEDIN_STATE,
} from './constants';

export function changeAuthAccountInfo(val) {
  return {
    type: CHANGE_AUTH_ACCOUNT_INFO,
    val,
  };
}

export function authInputError(err) {
  return {
    type: AUTH_INPUT_ERROR,
    err,
  };
}

export function authSendRequest() {
  return {
    type: AUTH_SEND_REQUEST,
  };
}

export function setLogedInState(state) {
  return {
    type: SET_LOGEDIN_STATE,
    state,
  };
}

export {
  showGlobalPrompt,
} from '../App/actions';
