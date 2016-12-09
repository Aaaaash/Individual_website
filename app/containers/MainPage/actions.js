import {
  FETCH_AUTH_INFO,
  SET_AUTH_INFO,
  CHANGE_NAV_ACTIVE,
} from './constants';

export function fetchAuthInfo() {
  return {
    type: FETCH_AUTH_INFO,
  };
}

export function setAuthInfo(data) {
  return {
    type: SET_AUTH_INFO,
    data,
  };
}

export function changeNavActive(val) {
  return {
    type: CHANGE_NAV_ACTIVE,
    val,
  };
}

export {
  showGlobalPrompt,
} from '../App/actions';
