import { Dispatch } from "redux";
import { setIsFetchingAC } from "../usersReducer/usersReducer";
import { profileApi } from "api/profileApi/profileApi";
import { ApiUser } from "interfaces/types";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState: ProfileState = {
    profile: null,
    status: "",
};

export const profileReducer = (state: ProfileState = initialState, action: ProfileReducer) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return { ...state, profile: action.payload.user };
        case SET_STATUS:
            return { ...state, status: action.payload.status };
        default:
            return state;
    }
};

// ACTIONS
export const setUserProfileAC = (user: ApiUser) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            user,
        },
    } as const;
};
export const setStatusAC = (status: string) => {
    return {
        type: SET_STATUS,
        payload: {
            status,
        },
    } as const;
};

// THUNKS
export const getUserProfileTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetchingAC(true));
    profileApi.getUserProfile(userId).then((res) => {
        profileApi.getStatus(userId).then((res) => {
            dispatch(setStatusAC(res.data));
        });
        dispatch(setUserProfileAC(res.data));
        dispatch(setIsFetchingAC(false));
    });
};

export const updateUserStatusTC = (status: string) => async (dispatch: Dispatch) => {
    dispatch(setIsFetchingAC(true));
    const res = await profileApi.updateStatus(status);
    if (res.data.resultCode === 0) {
        dispatch(setStatusAC(status));
    }
    dispatch(setIsFetchingAC(false));
};

// TYPES
export type ProfileState = {
    profile: ApiUser | null;
    status: string;
};

export type ProfileReducer = ReturnType<typeof setUserProfileAC> | ReturnType<typeof setStatusAC>;

