import { createSelector } from 'reselect';

const userItems = state => state.user;

export const currentUserSelector = createSelector(
    [userItems],
    user => user.user
);

export const currentUserSingInErrorSelector = createSelector(
    [userItems],
    user => user.errorSingIn
);

export const currentUserSingUpErrorSelector = createSelector(
    [userItems],
    user => user.errorSingUp
);

