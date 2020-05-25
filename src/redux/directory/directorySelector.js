import { createSelector } from 'reselect';

const directory = state => state.directory;

export const directorSelector = createSelector(
    [directory],
    directory => directory.sections
);