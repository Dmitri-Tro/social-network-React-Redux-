import { RootState } from "store/reduxStore";
import { UserAuthData } from "interfaces/types";

export const selectUserAuthData = (state: RootState): UserAuthData => state.userAuthData;

export const selectUserId = (state: RootState): number | null => state.userAuthData.id;
export const selectIsLogin = (state: RootState): boolean => state.userAuthData.isLogin;
export const selectCaptcha = (state: RootState): string | null => state.userAuthData.captcha;
