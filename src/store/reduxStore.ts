import {combineReducers, legacy_createStore as createStore} from "redux";
import {userMessagesReducer} from "./reducers/userMessagesReducer/userMessagesReducer";
import {postsReducer} from "./reducers/postsReducer/postsReducer";
import {usersReducer} from "./reducers/usersReducer/usersReducer";
import {authReducer} from "./reducers/authReducer/authReducer";
import {friendsMessagesReducer} from "./reducers/friendsMessagesReducer/friendsMessagesReducer";
import {profileReducer} from "./reducers/profileReducer/profileReducer";
import {friendsReducer} from "./reducers/friendsReducer/friendsReducer";


const rootReducer = combineReducers(
    {
        userProfileData: profileReducer,
        usersData: usersReducer,
        friendsData: friendsReducer,
        userAuthData: authReducer,
        userMessagesData: userMessagesReducer,
        friendsMessagesData: friendsMessagesReducer,
        postsData: postsReducer,
    }
);

export type RootState = ReturnType<typeof rootReducer>

export const reduxStore = createStore(rootReducer);


// @ts-ignore
window.store = reduxStore;
