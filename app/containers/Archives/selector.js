import { createSelector } from 'reselect';

const selectArchives = () => (state) => state.get('archives');

const selectArchivesList = () => createSelector(
  selectArchives(),
  (archivesState) => archivesState.get('archivesList').toJS()
);

export {
  selectArchivesList,
};
