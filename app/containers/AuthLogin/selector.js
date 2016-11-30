import { createSelector } from 'reselect';

const selectAuth = () => (state) => state.get('auth');

const selectAuthBaseInfo = () => createSelector(
  selectAuth(),
  (authState) => authState.get('authBaseInfo').toJS()
);

const selectAuthError = () => createSelector(
  selectAuth(),
  (authState) => authState.get('authBaseError').toJS()
);

const selectLoading = () => createSelector(
  selectAuth(),
  (authState) => authState.get('loading')
);

export {
  selectAuthBaseInfo,
  selectAuthError,
  selectLoading,
};
