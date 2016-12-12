import {
  FETCH_ARTICLE_CONTENT,
  FETCH_ARTICLE_CONTENT_SUCCESS,
  FETCH_ARTICLE_CONTENT_ERROR,
  CHANGE_CURRENT_ARTICLE,
} from './constants';

export function fetchArticleContent() {
  return {
    type: FETCH_ARTICLE_CONTENT,
  };
}

export function fetchArticleContentSuc(data) {
  return {
    type: FETCH_ARTICLE_CONTENT_SUCCESS,
    data,
  };
}

export function fetchArticleContentErr(err) {
  return {
    type: FETCH_ARTICLE_CONTENT_ERROR,
    err,
  };
}

export function changeCurrentArticle(val) {
  return {
    type: CHANGE_CURRENT_ARTICLE,
    val,
  };
}
