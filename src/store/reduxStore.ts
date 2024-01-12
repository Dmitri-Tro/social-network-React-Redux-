import {combineReducers, legacy_createStore as createStore} from "redux";
import {userMessagesReducer} from "./reducers/userMessagesReducer/userMessagesReducer";
import {postsReducer} from "./reducers/postsReducer/postsReducer";
import {usersReducer} from "./reducers/usersReducer/usersReducer";
import {friendsReducer} from "./reducers/FriendsReducer/friendsReducer";
import {authReducer} from "./reducers/authReducer/authReducer";
import {friendsMessagesReducer} from "./reducers/friendsMessagesReducer/friendsMessagesReducer";


const rootReducer = combineReducers(
    {
        usersData: usersReducer,
        userAuthData: authReducer,
        friendsData: friendsReducer,
        userMessagesData: userMessagesReducer,
        friendsMessagesData: friendsMessagesReducer,
        postsData: postsReducer,
    }
);

export type RootState = ReturnType<typeof rootReducer>

export const reduxStore = createStore(rootReducer);


// @ts-ignore
window.store = reduxStore;
