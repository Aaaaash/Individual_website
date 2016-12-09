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

export {
  selectAuthInfo,
  selectNavActive,
};
