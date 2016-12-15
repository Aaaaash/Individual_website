import {
  FETCH_ARTICLE_CONTENT,
  FETCH_ARTICLE_CONTENT_SUCCESS,
  FETCH_ARTICLE_CONTENT_ERROR,
  CHANGE_CURRENT_ARTICLE,
  CHANGE_COMMENT_INFO,
  SUBMIT_COMMENT,
  SUBMIT_COMMENT_SUCCESS,
  SUBMIT_COMMENT_ERROR,
  FETCH_COMMENTS_LIST,
  FETCH_COMMENTS_LIST_SUCCESS,
  FETCH_COMMENTS_LIST_ERROR,
  CHANGE_META_DATA,
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

export function changeCommentInfo(val) {
  return {
    type: CHANGE_COMMENT_INFO,
    val,
  };
}

export function submitComment() {
  return {
    type: SUBMIT_COMMENT,
  };
}

export function submitCommentSuc(data) {
  return {
    type: SUBMIT_COMMENT_SUCCESS,
    data,
  };
}

export function submitCommentErr(err) {
  return {
    type: SUBMIT_COMMENT_ERROR,
    err,
  };
}

export function fetchCommentsList() {
  return {
    type: FETCH_COMMENTS_LIST,
  };
}

export function fetchCommentsListSuc(data) {
  return {
    type: FETCH_COMMENTS_LIST_SUCCESS,
    data,
  };
}

export function fetchCommentsListErr(err) {
  return {
    type: FETCH_COMMENTS_LIST_ERROR,
    err,
  };
}

export function changeMetaData(data) {
  return {
    type: CHANGE_META_DATA,
    data,
  };
}
