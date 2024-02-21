import { UserAuthData } from "interfaces/types";
import { setIsFetchingAC, SetIsFetchingAC, TOGGLE_IS_FETCHING } from "../usersReducer/usersReducer";
import { authApi, LoginData } from "api/auth-api/authApi";
import { AppThunk } from "store/reduxStore";

const SET_AUTH_DATA = "Set-auth-data";
const LOGIN = "LOGIN";

const initialState: UserAuthData | null = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isLogin: false,
};
export const authReducer = (state: UserAuthData = initialState, action: AuthReducerAction): UserAuthData => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return { ...state, ...action.payload.authData };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.payload.isFetching };
        case LOGIN:
            return { ...state, isLogin: action.payload.isLogin };
        default:
            return state;
    }
};

// Actions
export const setAuthDataAC = (authData: UserAuthData) => {
    return {
        type: SET_AUTH_DATA,
        payload: {
            authData,
        },
    } as const;
};
export const loginAC = (isLogin: boolean) => {
    return {
        type: LOGIN,
        payload: {
            isLogin,
        },
    } as const;
};

// Thunks
export const authMeTC = (): AppThunk => (dispatch) => {
    dispatch(setIsFetchingAC(true));
    authApi.me().then((res) => {
        dispatch(setIsFetchingAC(false));
        if (res.data.resultCode === 0) {
            dispatch(loginAC(true));
            dispatch(setAuthDataAC(res.data.data));
        }
    });
};
export const loginTC = (data: LoginData): AppThunk => (dispatch) => {
    dispatch(setIsFetchingAC(true));
    authApi.login(data).then((res) => {
        dispatch(setIsFetchingAC(false));
        if (res.data.resultCode === 0) {
            dispatch(loginAC(true));
        }
    });
};
export const logoutTC = ():AppThunk => (dispatch) => {
    dispatch(setIsFetchingAC(true));
    authApi.logout().then((res) => {
        dispatch(setIsFetchingAC(false));
        if (res.data.resultCode === 0) {
            dispatch(loginAC(false));
        }
    });
};

// Types
export type AuthReducerAction =
    | ReturnType<typeof setAuthDataAC>
    | SetIsFetchingAC
    | ReturnType<typeof loginAC>;