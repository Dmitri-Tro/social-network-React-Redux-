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

export type UserBaseResponse<T={}> = {
    resultCode: number
    messages: string[],
    data: T
}

type GetUserURIParams = {
    count: number
    page: number
    term: string
}

type GetFriendsURIParams = {
    friend: boolean
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
    getUserProfile: ( userId: number) => {
        return instance.get<ApiUser>(`/profile/${userId}`);
    },
    follow: (userId: number) => {
        return instance.post<UserBaseResponse, AxiosResponse<UserBaseResponse>>(`/follow/${userId}`)
    },
    unfollow: (userId: number) => {
        return instance.delete<UserBaseResponse, AxiosResponse<UserBaseResponse>>(`/follow/${userId}`)
    },
    getFriends: (uriParams: GetFriendsURIParams) => {
        const paramsString = `friend=${uriParams.friend}`
        return instance.get<GetUserResponse>(`/users?${paramsString}`);
    },

};