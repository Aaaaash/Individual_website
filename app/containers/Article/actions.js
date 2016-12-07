import {
  FETCH_ALL_ARTICLE,
  FETCH_ALL_ARTICLE_SUCCESS,
  FETCH_ALL_ARTICLE_ERROR,
} from './constants';

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
