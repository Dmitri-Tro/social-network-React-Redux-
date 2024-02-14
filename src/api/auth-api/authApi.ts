import axios from "axios";
import {UserAuthData} from "../../interfaces/types";
import {BaseResponse} from "../users-api/usersApi";

export type GetAuthResponse = {
    resultCode: number
    messages: [],
    data: UserAuthData
}

export type LoginData = {
    email: string,
    password: string,
    rememberMe?: boolean
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-key": 'a19bb5a7-336b-4ae7-b475-a0ca6f07ecf9'
    },
});

export const authApi = {
    me: () => {
        return instance.get<GetAuthResponse>(`/auth/me`)
    },
    login: (data: LoginData) => {
        return instance.post<BaseResponse<{userId: number}>>(` /auth/login`, data)
    },
    logout: () => {
        return instance.delete<BaseResponse>(` /auth/login`)
    }
};