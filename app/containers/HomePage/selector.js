import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectMenuOpen = () => createSelector(
  selectHome(),
  (homeSate) => homeSate.get('menuOpen')
);

export {
  selectMenuOpen,
};
