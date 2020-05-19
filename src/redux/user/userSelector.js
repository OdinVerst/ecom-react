import { createSelector } from 'reselect';

const userItems = state => state.user;

export const currentUderSelector = createSelector(
    [userItems],
    user => user.user
);

