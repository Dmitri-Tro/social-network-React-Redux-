import { ApiAuthData, ResponseError, UserAuthData } from "interfaces/types";
import { authApi, LoginData } from "api/auth-api/authApi";
import { AppThunk } from "store/reduxStore";
import { setErrorAC, setIsFetchingAC, setIsInitialized } from "store/reducers/appReducer/appReducer";
import { AxiosError } from "axios";

const SET_AUTH_DATA = "Set-auth-data";
const SET_CAPTCHA = "SET_CAPTCHA";

const initialState: UserAuthData | null = {
    id: null,
    email: null,
    login: null,
    isLogin: false,
    captcha: null
};
export const authReducer = (state: UserAuthData = initialState, action: AuthReducerAction): UserAuthData => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return { ...state, ...action.payload.authData, isLogin: action.payload.isLogin };
        case SET_CAPTCHA:
            return { ...state, captcha: action.payload.url };
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
export const setCaptchaAC = (url: string) => {
    return {
        type: SET_CAPTCHA,
        payload: {
            url
        }
    } as const;
};

// Thunks
export const authMeTC = (): AppThunk => async (dispatch) => {
    dispatch(setIsFetchingAC(true)); // Show preloader
    try {
        const res = await authApi.me();// get auth data
        if (res.data.resultCode === 0) { // If ok - set response data to state
            dispatch(setAuthDataAC(res.data.data, true));
        } else { // If not ok - set error to state
            dispatch(setErrorAC(res.data.messages[0]));
        }
    } catch (e) {
        dispatch(setErrorAC((e as AxiosError<ResponseError>).message));
    } finally { // On the end...
        dispatch(setIsFetchingAC(false)); // Stop showing preloader
        dispatch(setIsInitialized(true)); // Initialize App and show markup
    }
};
export const loginTC =
    (data: LoginData): AppThunk => async (dispatch) => {
        dispatch(setIsFetchingAC(true)); // Show preloader
        try {
            const res = await authApi.login(data); // post auth user data
            if (res.data.resultCode === 0) { // if auth data correct
                dispatch(authMeTC()); // get auth data and set to state
            } else {
                if (res.data.resultCode === 10) { // if incorrect login data is entered repeatedly - server send result code 10
                    dispatch(getCaptchaTC()); // get captcha set to state and show
                }                             // if another result code or errors - set errors to state and show
                dispatch(setErrorAC(res.data.messages[0]));
            }
        } catch (e) {
            dispatch(setErrorAC((e as AxiosError<ResponseError>).message));
        } finally {
            dispatch(setIsFetchingAC(false)); // stop showing preloader
        }
    };
export const logoutTC = (): AppThunk => async (dispatch) => {
    dispatch(setIsFetchingAC(true)); // show preloader
    try {
        const res = await authApi.logout(); // logout user
        if (res.data.resultCode === 0) { // if user logout
            dispatch(setAuthDataAC({ id: null, email: null, login: null }, false)); // reset user authData
        } else { // if not logout - set errors to state and show
            dispatch(setErrorAC(res.data.messages[0]));
        }
    } catch (e) {
        dispatch(setErrorAC((e as AxiosError<ResponseError>).message));
    } finally {
        dispatch(setIsFetchingAC(false)); // stop showing preloader
    }
};

export const getCaptchaTC = (): AppThunk => async (dispatch) => {
    try {
        const res = await authApi.getCaptcha();
        dispatch(setCaptchaAC(res.data.url)); // if resolve - set captcha to state and show
    } catch (e) { // reject - set errors to state and show
        dispatch(setErrorAC((e as AxiosError<ResponseError>).message));
    }
};

// Types
export type AuthReducerAction = ReturnType<typeof setAuthDataAC> | ReturnType<typeof setCaptchaAC>;
