import {
  FETCH_AUTH_INFO,
  SET_AUTH_INFO,
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

export {
  showGlobalPrompt,
} from '../App/actions';
