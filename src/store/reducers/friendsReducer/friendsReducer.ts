import { FriendsData, ResponseError, User } from "interfaces/types";
import { Dispatch } from "redux";
import { profileApi } from "api/profileApi/profileApi";
import { setErrorAC } from "store/reducers/appReducer/appReducer";
import { AxiosError } from "axios";

const SET_FRIENDS = "SET_FRIENDS";

const initialState: FriendsData = {
    users: [],
    totalCount: 0,
    isFetching: false
};

export const friendsReducer = (state: FriendsData = initialState, action: FriendsReducerAction) => {
    switch (action.type) {
        case SET_FRIENDS:
            return { ...state, users: action.payload.friends, totalCount: action.payload.friendsCount };
        default:
            return state;
    }
};

// ACTIONS
export const setFriendsAC = (friends: User[], friendsCount: number) => {
    return {
        type: SET_FRIENDS,
        payload: {
            friends,
            friendsCount
        }
    } as const;
};

// THUNKS
export const getFriendsTC = () => (dispatch: Dispatch) => {
    const uriParams = {
        friend: true
    };
    profileApi.getFriends(uriParams)
        .then((res) => {
            if (!res.data.error) {
                dispatch(setFriendsAC(res.data.items, res.data.totalCount));
            } else {
                dispatch(setErrorAC(res.data.error));
            }
        })
        .catch((e: AxiosError<ResponseError>) => dispatch(setErrorAC(e.message)));
};

// TYPES
export type FriendsReducerAction = ReturnType<typeof setFriendsAC>;
