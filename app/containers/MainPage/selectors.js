import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectrMovieList = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('movieList')
);

const selectRequesting = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('requesting')
);

const selectError = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('error')
);

export {
  selectrMovieList,
  selectRequesting,
  selectError,
};
