import {UserAuthData} from "../../../interfaces/types";
import {SetIsFetchingAC, TOGGLE_IS_FETCHING} from "../usersReducer/usersReducer";

const initialState: UserAuthData | null = {
    id: null,
    email: null,
    login: null,
    isFetching: false
};

const SET_AUTH_DATA = 'Set-auth-data';

type AuthReducerAction = SetAuthDataAC | SetIsFetchingAC;

type SetAuthDataAC = ReturnType<typeof setAuthDataAC>;
export const setAuthDataAC = (authData: UserAuthData) => {
    return {
        type: SET_AUTH_DATA,
        payload: {
            authData
        }
    } as const
};

export const authReducer = (state: UserAuthData = initialState, action: AuthReducerAction): UserAuthData => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {...state, ...action.payload.authData}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.payload.isFetching}
        default:
            return state
    }
}