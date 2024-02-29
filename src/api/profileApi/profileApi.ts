import axios, { AxiosResponse } from "axios";
import { BaseResponse, GetUserResponse } from "../users-api/usersApi";
import { ApiUser, UserProfileData } from "interfaces/types";

type GetFriendsURIParams = {
    friend: boolean;
};

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
});

export const profileApi = {
    getUserProfile: (userId: number) => {
        return instance.get<ApiUser>(`/profile/${userId}`);
    },
    getFriends: (uriParams: GetFriendsURIParams) => {
        const paramsString = `?friend=${uriParams.friend}`;
        return instance.get<GetUserResponse>(`/users${paramsString}`);
    },
    getStatus: (userId: number) => {
        return instance.get(`/profile/status/${userId}`);
    },
    updateStatus: (status: string) => {
        return instance.put<BaseResponse, AxiosResponse<BaseResponse>>(`/profile/status`, { status });
    },
    updatePhoto: (image: File) => {
        const data = new FormData();
        data.append("image", image);
        return instance.put<
            BaseResponse<{ photos: { small: string; large: string } }>,
            AxiosResponse<BaseResponse<{ photos: { small: string; large: string } }>>
        >(`/profile/photo`, data, { headers: { "Content-Type": "multipart/form-data" } });
    },
    updateProfile: (profile: UserProfileData) => {
        return instance.put<BaseResponse, AxiosResponse<BaseResponse>>("profile", profile);
    },
};
