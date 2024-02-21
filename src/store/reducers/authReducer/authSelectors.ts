import { RootState } from "store/reduxStore";
import { UserAuthData } from "interfaces/types";

export const selectUserAuthData = (state: RootState): UserAuthData => state.userAuthData;
export const selectIsLogin = (state: RootState): boolean => state.userAuthData.isLogin;