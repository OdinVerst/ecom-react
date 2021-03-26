import {CHECK_USER_SESSION, EMAIL_SINGIN_START, GOOGLE_SINGIN_START, SINGOUT_START} from "../types"

export const googleSingInStart = () => ({
    type: GOOGLE_SINGIN_START
});

export const emailSingInStart = (loginValue) => ({
        type: EMAIL_SINGIN_START,
        loginValue
});

export const singOutStart = () => ({
    type: SINGOUT_START,
});

export const checkUserSession = () => ({
    type: CHECK_USER_SESSION,
});