import { createSelector } from 'reselect';

const selectContent = () => (state) => state.get('content');

const selectArticleList = () => createSelector(
  selectContent(),
  (contentState) => contentState.get('articleList')
);

export {
  selectArticleList,
};
