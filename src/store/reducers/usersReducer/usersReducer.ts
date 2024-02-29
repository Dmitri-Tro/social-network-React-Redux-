import { ResponseError, User, UsersData } from "interfaces/types";
import { usersApi } from "api/users-api/usersApi";
import { setFriendsAC } from "../friendsReducer/friendsReducer";
import { profileApi } from "api/profileApi/profileApi";
import { setErrorAC, setIsFetchingAC } from "store/reducers/appReducer/appReducer";
import { AxiosError } from "axios";
import { AppThunk } from "store/reduxStore";

const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_PAGE_SIZE = "SET_PAGE_SIZE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

const initialState: UsersData = {
    users: [] as User[],
    totalCount: 0,
    pageSize: 10,
    page: 1,
    friend: false
};

export const usersReducer = (state: UsersData = initialState, action: UsersReducerAction) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload.users, totalCount: action.payload.totalCount };
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.userId ? { ...user, followed: true } : user
                )
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.userId ? { ...user, followed: false } : user
                )
            };
        case SET_PAGE_SIZE:
            return { ...state, pageSize: Number(action.payload.pageSize), page: 1 };
        case SET_CURRENT_PAGE:
            return { ...state, page: action.payload.page };
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.userId ? { ...user, inProgress: action.payload.inProgress } : user
                )
            };
        default:
            return state;
    }
};

//ACTIONS
export const setUsersAC = (users: User[], totalCount: number) => {
    return {
        type: SET_USERS,
        payload: {
            users,
            totalCount
        }
    } as const;
};
export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    } as const;
};
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        }
    } as const;
};
export const followingInProgressAC = (userId: number, inProgress: boolean) => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        payload: {
            userId,
            inProgress
        }
    } as const;
};
export const setPageSizeAC = (pageSize: string) => {
    return {
        type: SET_PAGE_SIZE,
        payload: {
            pageSize
        }
    } as const;
};
export const setCurrentPageAC = (page: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            page
        }
    } as const;
};

// THUNKS
export const getUsersTC = (pagesSize: number, currentPage: number): AppThunk => async (dispatch) => {
    dispatch(setIsFetchingAC(true)); // show preloader
    const uriParams = {
        count: pagesSize,
        page: currentPage,
        term: ""
    };
    try {
        const res = await usersApi.getUsers(uriParams); // get users
        if (res.data.items) { // if data include items
            dispatch(setUsersAC(res.data.items, res.data.totalCount)); // set items (users) to state
        } else { // if response include errors - set errors to state and show
            dispatch(setErrorAC(res.data.error));
        }
    } catch (e) {
        dispatch(setErrorAC((e as AxiosError<ResponseError>).message));
    } finally {
        dispatch(setIsFetchingAC(false)); // stop showing preloader
    }
};

const getFriendsTC = (): AppThunk => async (dispatch) => {
    try {
        const uriParams = { friend: true };
        const res = await profileApi.getFriends(uriParams); // get user friends
        if (!res.data.error) { // if response without errors
            dispatch(setFriendsAC(res.data.items, res.data.totalCount)); // set friends to state
        } else { // if some errors - set errors to state and show
            dispatch(setErrorAC(res.data.error));
        }
    } catch (e) {
        dispatch(setErrorAC((e as AxiosError<ResponseError>).message));
    }
};

export const followingTC = (userId: number): AppThunk => async (dispatch) => {
    dispatch(setIsFetchingAC(true)); // show preloader
    try {
        const res = await usersApi.follow(userId); // set user as friend
        if (res.data.resultCode === 0) { // if response result code = 0
            dispatch(followAC(userId)); // set user as friend to state
            dispatch(getFriendsTC()); // get new friends list
        } else { // if have some errors - set errors to state and show
            dispatch(setErrorAC(res.data.messages[0]));
        }
    } catch (e) {
        dispatch(setErrorAC((e as AxiosError<ResponseError>).message));
    } finally {
        dispatch(setIsFetchingAC(false)); // stop showing preloader
    }
};

export const unfollowingTC = (userId: number): AppThunk => async (dispatch) => {
    dispatch(setIsFetchingAC(true)); // show preloader
    try {
        const res = await usersApi.unfollow(userId); // remove user from friends
        if (res.data.resultCode === 0) { // if response result code = 0
            dispatch(unfollowAC(userId)); // remove user from friends list
            dispatch(getFriendsTC()); // get new friends list
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
export type UsersReducerAction =
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof followingInProgressAC>
    | ReturnType<typeof setPageSizeAC>
    | ReturnType<typeof setCurrentPageAC>
    | SetIsFetchingAC;

export type SetIsFetchingAC = ReturnType<typeof setIsFetchingAC>;
