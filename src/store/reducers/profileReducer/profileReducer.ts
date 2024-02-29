import { profileApi } from "api/profileApi/profileApi";
import { ApiUser, ResponseError, UserProfileData } from "interfaces/types";
import { setEditModeAC, setErrorAC, setIsFetchingAC } from "store/reducers/appReducer/appReducer";
import { AxiosError } from "axios";
import { AppThunk } from "store/reduxStore";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_USER_PHOTO = "SET_USER_PHOTO";
const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";

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
        case SET_USER_PHOTO:
            return { ...state, profile: { ...state.profile, photos: action.payload.photos } };
        case UPDATE_USER_PROFILE:
            return { ...state, profile: { ...state.profile, ...action.payload.data } };
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

export const setUserPhotosAC = (photos: { small: string; large: string }) => {
    return {
        type: SET_USER_PHOTO,
        payload: {
            photos
        }
    } as const;
};

export const updateUserProfileAC = (data: UserProfileData) => {
    return {
        type: UPDATE_USER_PROFILE,
        payload: {
            data
        }
    } as const;
};

// THUNKS
export const getUserProfileTC = (userId: number): AppThunk => async (dispatch) => {
    dispatch(setIsFetchingAC(true)); // shaw preloader
    try {
        const res = await profileApi.getUserProfile(userId); // get user profile
        if (res.data.userId) { // if response include user data
            dispatch(setUserProfileAC(res.data)); // set user profile to state
            dispatch(getStatusTC(res.data.userId)); // set user status to state (another endpoint)
        } else { // if have some errors - set errors to state and show
            dispatch(setErrorAC("Can not set user profile"));
        }
    } catch (e) {
        dispatch(setErrorAC((e as AxiosError<ResponseError>).message));
    } finally {
        dispatch(setIsFetchingAC(false)); // stop showing preloader
    }
};
const getStatusTC = (userId: number): AppThunk => async (dispatch) => {
    try {
        const res = await profileApi.getStatus(userId); // get user status
        if (res.data) {
            dispatch(setStatusAC(res.data)); // set status to state
        }
    } catch (e) {
        dispatch(setErrorAC((e as AxiosError<ResponseError>).message)); // set error to state and show
    }
};
export const updateUserStatusTC = (status: string): AppThunk => async (dispatch) => {
    dispatch(setIsFetchingAC(true)); // show preloader
    try {
        const res = await profileApi.updateStatus(status); // send new status
        if (res.data.resultCode === 0) { // if server set new status
            dispatch(setStatusAC(status)); // set new status to state
        } else { // if have some errors - set errors to state and show
            dispatch(setErrorAC(res.data.messages[0]));
        }
    } catch (e) {
        dispatch(setErrorAC((e as AxiosError<ResponseError>).message));
    } finally {
        dispatch(setIsFetchingAC(false)); // stop showing preloader
    }
};
export const setUserPhotoTC = (photo: File): AppThunk => async (dispatch) => {
    dispatch(setIsFetchingAC(true)); // show preloader
    try {
        const res = await profileApi.updatePhoto(photo); // send new profile photo to server
        if (res.data.resultCode === 0) { // if server set new profile photo
            const small = res.data.data.photos.small;
            const large = res.data.data.photos.large;
            if (small !== null && large !== null) { // if new photo exist
                dispatch(setUserPhotosAC({ small, large })); // set new photo to state
            } else {
                dispatch(setErrorAC("Photo not uploaded"));
            }
        } else { // if have some errors - set errors to state and show
            dispatch(setErrorAC(res.data.messages[0]));
        }
    } catch (e) {
        dispatch(setErrorAC((e as AxiosError<ResponseError>).message));
    } finally {
        dispatch(setIsFetchingAC(false)); // stop showing preloader
    }
};
export const updateUserProfileTC = (updatedProfileData: UserProfileData): AppThunk => async (dispatch) => {
    dispatch(setIsFetchingAC(true)); // show preloader
    try {
        const res = await profileApi.updateProfile(updatedProfileData); // send to server updated user profile
        if (res.data.resultCode === 0) { // if server set updated profile
            dispatch(updateUserProfileAC(updatedProfileData)); // set updated profile to state
            dispatch(setEditModeAC(false)); // switch edit mode to view mode (profile page)
        } else { // if have some errors - set errors to state and show
            dispatch(setErrorAC(res.data.messages[0]));
        }
    } catch (e) {
        dispatch(setErrorAC((e as AxiosError<ResponseError>).message));
    } finally {
        dispatch(setIsFetchingAC(false)); // stop showing preloader
    }
};

// TYPES
export type ProfileState = {
    profile: ApiUser | null;
    status: string;
};

export type ProfileReducer =
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setUserPhotosAC>
    | ReturnType<typeof updateUserProfileAC>;
