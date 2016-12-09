import {
  FETCH_ALL_ARTICLE,
  FETCH_ALL_ARTICLE_SUCCESS,
  FETCH_ALL_ARTICLE_ERROR,
  CHANGE_SEARCH_TITLE,
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

export function changeSearchTitle(val) {
  return {
    type: CHANGE_SEARCH_TITLE,
    val,
  };
}
