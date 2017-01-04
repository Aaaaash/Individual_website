import {
  CHANGE_AUTH_ACCOUNT_INFO,
  AUTH_INPUT_ERROR,
  AUTH_SEND_REQUEST,
  SET_LOGEDIN_STATE,
  LOGOUT,
  CHANGE_REGISTER_INFO,
  SUBMIT_AUTH_REGISTER,
  SUBMIT_AUTH_REGISTER_SUCCESS,
  SUBMIT_AUTH_REGISTER_ERROR,
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

export function changeRegisterInfo(val) {
  return {
    type: CHANGE_REGISTER_INFO,
    val,
  };
}

export function submitRegister() {
  return {
    type: SUBMIT_AUTH_REGISTER,
  };
}

export function submitRegisterSuc(data) {
  return {
    type: SUBMIT_AUTH_REGISTER_SUCCESS,
    data,
  };
}

export function submitRegisterErr(err) {
  return {
    type: SUBMIT_AUTH_REGISTER_ERROR,
    err,
  };
}

export {
  showGlobalPrompt,
} from '../App/actions';
