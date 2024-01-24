import axios from "axios";
import {User} from "../../interfaces/types";

export type UserBaseResponse = {
    items: User[];
    totalCount: number;
    error?: any;
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-key": 'a19bb5a7-336b-4ae7-b475-a0ca6f07ecf9'
    },
});

export const usersApi = {
    getUsers: (URIParams: string) => {
        return instance.get<UserBaseResponse>(`/users?${URIParams}`);
    },
};