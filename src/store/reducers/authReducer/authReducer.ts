import { ApiAuthData, ResponseError, UserAuthData } from "interfaces/types";
import { authApi, LoginData } from "api/auth-api/authApi";
import { AppThunk } from "store/reduxStore";
import { setErrorAC, setIsFetchingAC } from "store/reducers/appReducer/appReducer";
import { AxiosError } from "axios";

const SET_AUTH_DATA = "Set-auth-data";

const initialState: UserAuthData | null = {
    id: null,
    email: null,
    login: null,
    isLogin: false
};
export const authReducer = (state: UserAuthData = initialState, action: AuthReducerAction): UserAuthData => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return { ...state, ...action.payload.authData, isLogin: action.payload.isLogin };
        default:
            return state;
    }
};

// Actions
export const setAuthDataAC = (authData: ApiAuthData, isLogin: boolean) => {
    return {
        type: SET_AUTH_DATA,
        payload: {
            authData,
            isLogin
        }
    } as const;
};

// Thunks
export const authMeTC = (): AppThunk => (dispatch) => {
    dispatch(setIsFetchingAC(true));
    authApi.me()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthDataAC(res.data.data, true));
            } else {
                dispatch(setErrorAC(res.data.messages[0]));
            }
        })
        .catch((e: AxiosError<ResponseError>) => dispatch(setErrorAC(e.message)))
        .finally(() => dispatch(setIsFetchingAC(false)));
};
export const loginTC = (data: LoginData): AppThunk => (dispatch) => {
    dispatch(setIsFetchingAC(true));
    authApi.login(data)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(authMeTC());
            } else {
                dispatch(setErrorAC(res.data.messages[0]));
            }
        })
        .catch((e: AxiosError<ResponseError>) => dispatch(setErrorAC(e.message)))
        .finally(() => dispatch(setIsFetchingAC(false)));
};
export const logoutTC = (): AppThunk => (dispatch) => {
    dispatch(setIsFetchingAC(true));
    authApi.logout()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthDataAC({ id: null, email: null, login: null }, false));
            } else {
                dispatch(setErrorAC(res.data.messages[0]));
            }
        })
        .catch((e: AxiosError<ResponseError>) => dispatch(setErrorAC(e.message)))
        .finally(() => dispatch(setIsFetchingAC(false)));
};

// Types
export type AuthReducerAction =
    | ReturnType<typeof setAuthDataAC>