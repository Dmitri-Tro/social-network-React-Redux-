import { FriendsData, ResponseError, User } from "interfaces/types";
import { profileApi } from "api/profileApi/profileApi";
import { setErrorAC } from "store/reducers/appReducer/appReducer";
import { AxiosError } from "axios";
import { AppThunk } from "store/reduxStore";

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
export const getFriendsTC = (): AppThunk => async (dispatch) => {
    try {
        const uriParams = { friend: true };
        const res = await profileApi.getFriends(uriParams); // get user friends
        if (!res.data.error) { // if response without errors
            dispatch(setFriendsAC(res.data.items, res.data.totalCount)); // set friends to state
        } else { // if response with errors - set errors to state and show
            dispatch(setErrorAC(res.data.error));
        }
    } catch (e) {
        dispatch(setErrorAC((e as AxiosError<ResponseError>).message));
    }
};

// TYPES
export type FriendsReducerAction = ReturnType<typeof setFriendsAC>;
