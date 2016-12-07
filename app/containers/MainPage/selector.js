import { createSelector } from 'reselect';

const selectIndex = () => (state) => state.get('index');

const selectAuthInfo = () => createSelector(
  selectIndex(),
  (indexState) => indexState.get('authInfo').toJS()
);

export {
  selectAuthInfo,
};
