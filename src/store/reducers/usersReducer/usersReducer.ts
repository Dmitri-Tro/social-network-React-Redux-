import {User, UsersData} from "../../../interfaces/types";

type UsersReducerAction = SetUsersAC | FollowAC | UnfollowAC | SetPageSizeAC | SetCurrentPageAC;

const SET_USERS = 'SET-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState: UsersData = {
    users: [],
    totalCount: 0,
    pageSize: 10,
    page: 1,
    friend: false

};

type SetUsersAC = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: User[], totalCount: number) => {
    return {
        type: SET_USERS,
        payload: {
            users,
            totalCount
        }
    }as const
}
type FollowAC = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    }as const
}
type UnfollowAC = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        }
    }as const
}
type SetPageSizeAC = ReturnType<typeof setPageSizeAC>
export const setPageSizeAC = (pageSize: string) => {
    return {
        type: SET_PAGE_SIZE,
        payload: {
            pageSize
        }
    }as const
}

type SetCurrentPageAC = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (page: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            page
        }
    }as const
}
export const usersReducer = (state: UsersData = initialState, action: UsersReducerAction) => {
    switch (action.type) {
        case SET_USERS:
            return {...state,  users: action.payload.users, totalCount: action.payload.totalCount}
        case FOLLOW:
            return {...state, users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: true} : user)}
        case UNFOLLOW:
            return {...state, users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: false} : user)}
        case SET_PAGE_SIZE:
            return {...state, pageSize: Number(action.payload.pageSize), page: 1}
        case SET_CURRENT_PAGE:
            return {...state, page: action.payload.page}
        default:
            return state
    }
};