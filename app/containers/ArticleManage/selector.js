import { createSelector } from 'reselect';

const selectArticle = () => (state) => state.get('article');

const selectArticleInfo = () => createSelector(
  selectArticle(),
  (articleState) => articleState.get('articleInfo').toJS()
);

const selectPrivateArticle = () => createSelector(
  selectArticle(),
  (articleState) => articleState.get('privateList').toJS()
);

const selectHighlight = () => createSelector(
  selectArticle(),
  (articleState) => articleState.get('highlight')
);

const selectDialogState = () => createSelector(
  selectArticle(),
  (articleState) => articleState.get('dialogState')
);

export {
  selectAuthInfo,
} from '../MainPage/selector';

export {
  selectArticleInfo,
  selectPrivateArticle,
  selectHighlight,
  selectDialogState,
};
