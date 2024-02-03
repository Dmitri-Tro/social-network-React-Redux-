import axios from "axios";
import {UserAuthData} from "../../interfaces/types";

export type GetAuthResponse = {
    resultCode: number
    messages: [],
    data: UserAuthData
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-key": 'a19bb5a7-336b-4ae7-b475-a0ca6f07ecf9'
    },
});

export const authApi = {
    getAuth: () => {
        return instance.get<GetAuthResponse>(`/auth/me`)
    }
};