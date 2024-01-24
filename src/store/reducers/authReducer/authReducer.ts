import {UserAuthData} from "../../../interfaces/types";

const initialState: UserAuthData = {
    name: 'Dmitri',
    password: '0002',
    id: 2,
    avatar: '',
    birthday: '06.12.1987',
    cityAddress: 'Helsinki',
    occupation: 'Frontend-developer',
    quot: ''
};

const UPDATE_USER_AUTH_DATA = 'Update-user-auth-data';

type AuthReducerAction = UpdateUserAuthDataAC;

type UpdateUserAuthDataAC = ReturnType<typeof updateUserAuthDataAC>;
const updateUserAuthDataAC = (name: string, password: string) => {
    return {
        type: UPDATE_USER_AUTH_DATA,
        payload: {
            name,
            password
        }
    } as const
};

export const authReducer = (state: UserAuthData = initialState, action: AuthReducerAction): UserAuthData => {
    switch (action.type) {
        case UPDATE_USER_AUTH_DATA:
            return state
        default:
            return state
    }
}