import {
  CHANGE_ARTICLE_INFO,
  PUSH_ARTICLE,
  PUSH_ARTICLE_SUCCESS,
  PUSH_ARTICLE_ERROR,
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

export {
  fetchAllArticle,
} from '../MainPage/actions';
