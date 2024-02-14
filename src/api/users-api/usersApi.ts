import axios, {AxiosResponse} from "axios";
import {User} from "../../interfaces/types";

export type ApiUser = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string | null
        large: string | null
    }
}

export type BaseResponse<T={}> = {
    resultCode: number
    messages: string[],
    data: T
}

type GetUserURIParams = {
    count: number
    page: number
    term: string
}

export type GetUserResponse = {
    items: User[];
    totalCount: number;
    error?: any;
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-key": 'a19bb5a7-336b-4ae7-b475-a0ca6f07ecf9'
    },
});

export const usersApi = {
    getUsers: (uriParams: GetUserURIParams) => {
        const paramsString = `page=${uriParams.page}&count=${uriParams.count}&term=${uriParams.term}`
        return instance.get<GetUserResponse>(`/users?${paramsString}`);
    },
    follow: (userId: number) => {
        return instance.post<BaseResponse, AxiosResponse<BaseResponse>>(`/follow/${userId}`)
    },
    unfollow: (userId: number) => {
        return instance.delete<BaseResponse, AxiosResponse<BaseResponse>>(`/follow/${userId}`)
    },


};