import {FriendsData, User} from "../../../interfaces/types";

type UsersReducerAction =
    | SetFriends

const SET_FRIENDS = 'SET_FRIENDS';

const initialState: FriendsData = {
    users: [],
    totalCount: 0,
    isFetching: false
}

type SetFriends = ReturnType<typeof setFriendsAC>
export const setFriendsAC = (friends: User[], friendsCount: number) => {
    return {
        type: SET_FRIENDS,
        payload: {
            friends,
            friendsCount,
        }
    } as const
}

export const friendsReducer = (state: FriendsData = initialState, action: UsersReducerAction) => {
    switch (action.type) {
        case SET_FRIENDS:
            return {...state, users: action.payload.friends, totalCount: action.payload.friendsCount}
        default:
            return state
    }
};