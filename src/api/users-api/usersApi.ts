import axios, { AxiosResponse } from "axios";
import { User } from "interfaces/types";

export type BaseResponse<T = {}> = {
    resultCode: number;
    messages: string[];
    data: T;
};

type GetUserURIParams = {
    count: number;
    page: number;
    term: string;
};

export type GetUserResponse = {
    items: User[];
    totalCount: number;
    error?: any;
};

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
});

export const usersApi = {
    getUsers: (uriParams: GetUserURIParams) => {
        const paramsString = `page=${uriParams.page}&count=${uriParams.count}&term=${uriParams.term}`;
        return instance.get<GetUserResponse>(`/users?${paramsString}`);
    },
    follow: (userId: number) => {
        return instance.post<BaseResponse, AxiosResponse<BaseResponse>>(`/follow/${userId}`);
    },
    unfollow: (userId: number) => {
        return instance.delete<BaseResponse, AxiosResponse<BaseResponse>>(`/follow/${userId}`);
    },
};
