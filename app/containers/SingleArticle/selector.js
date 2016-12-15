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

const selectComment = () => createSelector(
  selectSingleArticle(),
  (articleState) => articleState.get('comment').toJS()
);

const selectComments = () => createSelector(
  selectSingleArticle(),
  (articleState) => articleState.get('comments').toJS()
);

const selectMetaData = () => createSelector(
  selectSingleArticle(),
  (articleState) => articleState.get('metaData').toJS()
);

export {
  selectCurrentArticle,
  selectRequesting,
  selectComment,
  selectComments,
  selectMetaData,
};
