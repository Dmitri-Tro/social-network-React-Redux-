import { profileReducer, ProfileState, setStatusAC, setUserProfileAC } from "./profileReducer";
import { ApiUser } from "interfaces/types";
test('should set user profile', () => {
    const initialState: ProfileState = {
        profile: null,
        status: "",
    };
    const profile: ApiUser = {
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: 'string',
        fullName: 'Dima',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: null,
            large: null,
        },
    };

    const endState = profileReducer(initialState, setUserProfileAC(profile));

    expect(endState.profile).toBeDefined();
    expect(endState.profile!.userId).toBe(1);
});

test('should set user status', () => {
    const initialState = {
        profile: {
            userId: 1,
            lookingForAJob: true,
            lookingForAJobDescription: 'string',
            fullName: 'Dima',
            contacts: {
                github: '',
                vk: '',
                facebook: '',
                instagram: '',
                twitter: '',
                website: '',
                youtube: '',
                mainLink: '',
            },
            photos: {
                small: null,
                large: null,
            },
        },
        status: ''
    };

    const endState = profileReducer(initialState, setStatusAC('Hello!'));

    expect(endState.profile!.userId).toBe(1);
    expect(endState.status).toBe('Hello!');
});