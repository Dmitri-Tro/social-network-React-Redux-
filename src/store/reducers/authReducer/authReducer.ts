import {UserAuthData} from "../../../interfaces/types";
import {setIsFetchingAC, SetIsFetchingAC, TOGGLE_IS_FETCHING} from "../usersReducer/usersReducer";
import {Dispatch} from "redux";
import {authApi, LoginData} from "../../../api/auth-api/authApi";

const initialState: UserAuthData | null = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isLogin: false
};

const SET_AUTH_DATA = 'Set-auth-data';
const LOGIN = 'LOGIN';

export type AuthReducerAction = SetAuthDataAC | SetIsFetchingAC | LoginAC;

type SetAuthDataAC = ReturnType<typeof setAuthDataAC>;
export const setAuthDataAC = (authData: UserAuthData) => {
    return {
        type: SET_AUTH_DATA,
        payload: {
            authData
        }
    } as const
};

type LoginAC = ReturnType<typeof loginAC>;
export const loginAC = (isLogin: boolean) => {
    return {
        type: LOGIN,
        payload: {
            isLogin
        }
    } as const
};

export const authReducer = (state: UserAuthData = initialState, action: AuthReducerAction): UserAuthData => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {...state, ...action.payload.authData}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.payload.isFetching}
        case LOGIN:
            return {...state, isLogin: action.payload.isLogin}
        default:
            return state
    }
}

export const authMeTC = () => (dispatch: Dispatch) => {
    dispatch(setIsFetchingAC(true));
    authApi.me()
        .then(res => {
            dispatch(setIsFetchingAC(false));
            console.log(res.data.resultCode)
            if (res.data.resultCode === 0) {
                dispatch(loginAC(true));
                dispatch(setAuthDataAC(res.data.data))
            }
        })
}
export const loginTC = (data: LoginData) => (dispatch: Dispatch) => {
    dispatch(setIsFetchingAC(true));
    authApi.login(data)
        .then(res => {
            dispatch(setIsFetchingAC(false));
            if (res.data.resultCode === 0) {
                dispatch(loginAC(true))
            }
        })
}
export const logoutTC = () => (dispatch: Dispatch) => {
    dispatch(setIsFetchingAC(true));
    authApi.logout()
        .then(res => {
            dispatch(setIsFetchingAC(false));
            if (res.data.resultCode === 0) {
                dispatch(loginAC(false))
            }
        })
}

