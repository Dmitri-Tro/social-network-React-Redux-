import {UserAuthData} from "../../../interfaces/types";

const initialState: UserAuthData = {
    name: 'Dmitri',
    password: '0002',
    id: '0002',
    avatar: 'https://scontent-hel3-1.xx.fbcdn.net/v/t39.30808-6/353615182_971256257497197_5841500500956257966_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=IEW1OoilnJYAX9yGAoR&_nc_ht=scontent-hel3-1.xx&oh=00_AfBO3ZqMwngO9qLAPPdBFMJAVfBDEHkiKGfnGZLRDlOJKQ&oe=65A4B7D2',
    birthday: '06.12.1987',
    cityAddress: 'Joensuu',
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