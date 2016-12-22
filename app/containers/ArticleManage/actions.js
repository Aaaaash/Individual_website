import {
  CHANGE_ARTICLE_INFO,
  PUSH_ARTICLE,
  PUSH_ARTICLE_SUCCESS,
  PUSH_ARTICLE_ERROR,
  FETCH_PRIVATE_ARTICLE,
  CHANGE_PRIVATE_ARTICLE,
  CHANGE_HIGHLIGHT_CURRENT,
  FETCH_EDITED_ARTICLE,
} from './constants';

export function changeArticleInfo(info) {
  return {
    type: CHANGE_ARTICLE_INFO,
    info,
  };
}

export function pushArticle() {
  return {
    type: PUSH_ARTICLE,
  };
}

export function pushArticleSuccess(data) {
  return {
    type: PUSH_ARTICLE_SUCCESS,
    data,
  };
}

export function pushArticleError(err) {
  return {
    type: PUSH_ARTICLE_ERROR,
    err,
  };
}

export function fetchPrivateArticle() {
  return {
    type: FETCH_PRIVATE_ARTICLE,
  };
}

export function changePrivateArticle(data) {
  return {
    type: CHANGE_PRIVATE_ARTICLE,
    data,
  };
}

export function changeHightlightCurrent(id) {
  return {
    type: CHANGE_HIGHLIGHT_CURRENT,
    id,
  };
}

export function fetchEditedArticle() {
  return {
    type: FETCH_EDITED_ARTICLE,
  };
}
