import {
  FETCH_AUTH_INFO,
  SET_AUTH_INFO,
  CHANGE_NAV_ACTIVE,
  FETCH_ALL_ARTICLE,
  FETCH_ALL_ARTICLE_SUCCESS,
  FETCH_ALL_ARTICLE_ERROR,
  CHANGE_SEARCH_TITLE,
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

export function fetchAllArticle() {
  return {
    type: FETCH_ALL_ARTICLE,
  };
}

export function fetchAllArticleSuc(data) {
  return {
    type: FETCH_ALL_ARTICLE_SUCCESS,
    data,
  };
}

export function fetchAllArticleErr(err) {
  return {
    type: FETCH_ALL_ARTICLE_ERROR,
    err,
  };
}

export function changeSearchTitle(val) {
  return {
    type: CHANGE_SEARCH_TITLE,
    val,
  };
}

export {
  showGlobalPrompt,
  logout,
} from '../App/actions';
