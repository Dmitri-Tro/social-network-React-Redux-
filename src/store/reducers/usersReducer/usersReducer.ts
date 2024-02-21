import { User, UsersData } from "interfaces/types";
import { Dispatch } from "redux";
import { usersApi } from "api/users-api/usersApi";
import { setFriendsAC } from "../friendsReducer/friendsReducer";
import { profileApi } from "api/profileApi/profileApi";

const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_PAGE_SIZE = "SET_PAGE_SIZE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

const initialState: UsersData = {
    users: [] as User[],
    totalCount: 0,
    pageSize: 10,
    page: 1,
    friend: false,
    isFetching: false,
};

export const usersReducer = (state: UsersData = initialState, action: UsersReducerAction) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload.users, totalCount: action.payload.totalCount };
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.userId ? { ...user, followed: true } : user,
                ),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.userId ? { ...user, followed: false } : user,
                ),
            };
        case SET_PAGE_SIZE:
            return { ...state, pageSize: Number(action.payload.pageSize), page: 1 };
        case SET_CURRENT_PAGE:
            return { ...state, page: action.payload.page };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.payload.isFetching };
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.userId ? { ...user, inProgress: action.payload.inProgress } : user,
                ),
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
            totalCount,
        },
    } as const;
};
export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId,
        },
    } as const;
};
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId,
        },
    } as const;
};
export const followingInProgressAC = (userId: number, inProgress: boolean) => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        payload: {
            userId,
            inProgress,
        },
    } as const;
};
export const setPageSizeAC = (pageSize: string) => {
    return {
        type: SET_PAGE_SIZE,
        payload: {
            pageSize,
        },
    } as const;
};
export const setCurrentPageAC = (page: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            page,
        },
    } as const;
};
export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching,
        },
    } as const;
};

// THUNKS
export const getUsersTC = (pagesSize: number, currentPage: number) => (dispatch: Dispatch) => {
    const uriParams = {
        count: pagesSize,
        page: currentPage,
        term: "",
    };
    dispatch(setIsFetchingAC(true));
    usersApi.getUsers(uriParams).then((res) => {
        dispatch(setIsFetchingAC(false));
        dispatch(setUsersAC(res.data.items, res.data.totalCount));
    });
};

export const followingTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(followingInProgressAC(userId, true));
    usersApi.follow(userId).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(followAC(userId));
        }
        dispatch(followingInProgressAC(userId, false));
    });
    const uriParams = {
        friend: true,
    };
    profileApi.getFriends(uriParams).then((res) => {
        dispatch(setFriendsAC(res.data.items, res.data.totalCount));
    });
};

export const unfollowingTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(followingInProgressAC(userId, true));
    usersApi.unfollow(userId).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(unfollowAC(userId));
        }
        dispatch(followingInProgressAC(userId, false));
    });
    const uriParams = {
        friend: true,
    };
    profileApi.getFriends(uriParams).then((res) => {
        dispatch(setFriendsAC(res.data.items, res.data.totalCount));
    });
};

// TYPES
export type UsersReducerAction =
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof followingInProgressAC>
    | ReturnType<typeof setPageSizeAC>
    | ReturnType<typeof setCurrentPageAC>
    | SetIsFetchingAC

export type SetIsFetchingAC = ReturnType<typeof setIsFetchingAC>;