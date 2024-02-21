import { Dispatch } from "redux";
import { profileApi } from "api/profileApi/profileApi";
import { ApiUser, ResponseError } from "interfaces/types";
import { setErrorAC, setIsFetchingAC } from "store/reducers/appReducer/appReducer";
import { AxiosError } from "axios";
import { AppThunk } from "store/reduxStore";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState: ProfileState = {
    profile: null,
    status: ""
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
            user
        }
    } as const;
};
export const setStatusAC = (status: string) => {
    return {
        type: SET_STATUS,
        payload: {
            status
        }
    } as const;
};

// THUNKS
const getStatusTC = (userId: number): AppThunk => (dispatch) => {
    profileApi.getStatus(userId)
        .then((res) => {
            console.log(res.data);
            if (res.data) {
                dispatch(setStatusAC(res.data));
            } else {
                dispatch(setErrorAC('Can not set user status'));
            }
        })
        .catch((e: AxiosError<ResponseError>) => dispatch(setErrorAC(e.message)));
};
export const getUserProfileTC = (userId: number): AppThunk => (dispatch) => {
    dispatch(setIsFetchingAC(true));
    profileApi.getUserProfile(userId)
        .then((res) => {
            if (res.data.userId) {
                dispatch(getStatusTC(res.data.userId));
                dispatch(setUserProfileAC(res.data));
            } else {
                dispatch(setErrorAC("Can not set user profile"));
            }
        })
        .catch((e: AxiosError<ResponseError>) => dispatch(setErrorAC(e.message)))
        .finally(() => dispatch(setIsFetchingAC(false)));
};

export const updateUserStatusTC = (status: string) => async (dispatch: Dispatch) => {
    dispatch(setIsFetchingAC(true));
    const res = await profileApi.updateStatus(status);
    try {
        if (res.data.resultCode === 0) {
            dispatch(setStatusAC(status));
        } else {
            dispatch(setErrorAC(res.data.messages[0]));
        }
    } catch (e) {
        dispatch(setErrorAC((e as AxiosError<ResponseError>).message));
    } finally {
        dispatch(setIsFetchingAC(false));
    }
};

// TYPES
export type ProfileState = {
    profile: ApiUser | null;
    status: string;
};

export type ProfileReducer = ReturnType<typeof setUserProfileAC> | ReturnType<typeof setStatusAC>;

