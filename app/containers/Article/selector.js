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

export {
  selectArticleList,
  selectRequesting,
};
