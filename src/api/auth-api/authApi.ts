import axios from "axios";
import { ApiAuthData } from "interfaces/types";
import { BaseResponse } from "../users-api/usersApi";

type GetAuthResponse = {
    resultCode: number;
    messages: string[];
    data: ApiAuthData;
};

export type LoginData = {
    email: string;
    password: string;
    rememberMe?: boolean;
};

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
});

export const authApi = {
    me: () => {
        return instance.get<GetAuthResponse>(`/auth/me`);
    },
    login: (data: LoginData) => {
        return instance.post<BaseResponse<{ userId: number }>>(`/auth/login`, data);
    },
    logout: () => {
        return instance.delete<BaseResponse>(`/auth/login`);
    },
    getCaptcha: () => {
        return instance.get<{ url: string }>(`/security/get-captcha-url`);
    },
};
