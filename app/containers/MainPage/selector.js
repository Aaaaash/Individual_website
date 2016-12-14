import { createSelector } from 'reselect';

const selectIndex = () => (state) => state.get('index');

const selectAuthInfo = () => createSelector(
  selectIndex(),
  (indexState) => indexState.get('authInfo').toJS()
);

const selectNavActive = () => createSelector(
  selectIndex(),
  (indexState) => indexState.get('navActive')
);

const selectArticleList = () => createSelector(
  selectIndex(),
  (indexState) => indexState.get('articleList').toJS()
);

const selectRequesting = () => createSelector(
  selectIndex(),
  (indexState) => indexState.get('requesting')
);

const selectSearchTitle = () => createSelector(
  selectIndex(),
  (indexState) => indexState.get('searchTitle')
);

export {
  selectAuthInfo,
  selectArticleList,
  selectNavActive,
  selectRequesting,
  selectSearchTitle,
};
