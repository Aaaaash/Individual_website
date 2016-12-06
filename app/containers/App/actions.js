/*
 * App actions
 */

import {
  USERINFO_REQUESTING,
  USERINFO_REQUEST_SUCCESS,
  USERINFO_REQUEST_ERROR,
  LOGOUT,
  GLOBAL_ERROR,
  SHOW_GLOBAL_PROMPT,
} from './constants';

export function userinfoRequest() {
  return { type: USERINFO_REQUESTING };
}

export function userinfoRequestSuccess(userInfo) {
  return { type: USERINFO_REQUEST_SUCCESS, userInfo };
}

export function userinfoRequestError(error) {
  return { type: USERINFO_REQUEST_ERROR, error };
}

export function logout() {
  return { type: LOGOUT };
}

export function globalError(code) {
  return { type: GLOBAL_ERROR, code };
}

export function showGlobalPrompt(config) {
  return { type: SHOW_GLOBAL_PROMPT, config };
}
