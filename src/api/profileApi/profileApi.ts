import axios, {AxiosResponse} from "axios";
import {ApiUser, BaseResponse, GetUserResponse} from "../users-api/usersApi";

type GetFriendsURIParams = {
    friend: boolean
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-key": 'a19bb5a7-336b-4ae7-b475-a0ca6f07ecf9'
    },
});

export const profileApi = {
    getUserProfile: ( userId: number) => {
        return instance.get<ApiUser>(`/profile/${userId}`);
    },
    getFriends: (uriParams: GetFriendsURIParams) => {
        const paramsString = `friend=${uriParams.friend}`
        return instance.get<GetUserResponse>(`/users?${paramsString}`);
    },
    getStatus: (userId: number) => {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus: (status: string) => {
        return instance.put<BaseResponse, AxiosResponse<BaseResponse>>(`/profile/status`, {status})
    }

};