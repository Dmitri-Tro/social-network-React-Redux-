import {ApiUser} from "../../../api/users-api/usersApi";

const SET_USER_PROFILE = 'SET_USER_PROFILE';

type ProfileReducer = SetUserProfileAC

type SetUserProfileAC = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (user: ApiUser) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            user
        }
    } as const
}

const initialState: ApiUser | null = null

export const profileReducer = (state: ApiUser | null = initialState, action: ProfileReducer) => {
    switch (action.type) {
        case "SET_USER_PROFILE":
            return {...action.payload.user}
        default:
            return state
    }


}