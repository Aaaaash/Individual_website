import { createSelector } from 'reselect';

const selectContent = () => (state) => state.get('content');

const selectArticleList = () => createSelector(
  selectContent(),
  (contentState) => contentState.get('articleList').toJS()
);

const selectRequesting = () => createSelector(
  selectContent(),
  (contentState) => contentState.get('requesting')
);

const selectSearchTitle = () => createSelector(
  selectContent(),
  (contentState) => contentState.get('searchTitle')
);

export {
  selectArticleList,
  selectRequesting,
  selectSearchTitle,
};
