import { createSelector } from 'reselect';

const selectSingleArticle = () => (state) => state.get('singleArticle');

const selectCurrentArticle = () => createSelector(
  selectSingleArticle(),
  (articleState) => articleState.get('currentArticle').toJS()
);

const selectRequesting = () => createSelector(
  selectSingleArticle(),
  (articleState) => articleState.get('requesting')
);

const selectComments = () => createSelector(
  selectSingleArticle(),
  (articleState) => articleState.get('comments').toJS()
);

export {
  selectCurrentArticle,
  selectRequesting,
  selectComments,
};
