import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import { userMessagesReducer, UserMessagesReducerAction } from "./reducers/userMessagesReducer/userMessagesReducer";
import { postsReducer, PostsReducerAction } from "./reducers/postsReducer/postsReducer";
import { usersReducer, UsersReducerAction } from "./reducers/usersReducer/usersReducer";
import { authReducer, AuthReducerAction } from "./reducers/authReducer/authReducer";
import {
    friendsMessagesReducer,
    FriendsMessagesReducerAction,
} from "./reducers/friendsMessagesReducer/friendsMessagesReducer";
import { ProfileReducer, profileReducer } from "./reducers/profileReducer/profileReducer";
import { friendsReducer, FriendsReducerAction } from "./reducers/friendsReducer/friendsReducer";
import { thunk, ThunkAction, ThunkDispatch } from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { appReducer, AppReducerActions } from "store/reducers/appReducer/appReducer";

const rootReducer = combineReducers({
    appState: appReducer,
    userProfileData: profileReducer,
    usersData: usersReducer,
    friendsData: friendsReducer,
    userAuthData: authReducer,
    userMessagesData: userMessagesReducer,
    friendsMessagesData: friendsMessagesReducer,
    postsData: postsReducer,
});

// Redux devtools (for browser extension)
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const reduxStore = createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(thunk)));

//Hooks with types
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Types
export type RootState = ReturnType<typeof rootReducer>;
type AppActions =
    | AppReducerActions
    | AuthReducerAction
    | FriendsMessagesReducerAction
    | FriendsReducerAction
    | PostsReducerAction
    | ProfileReducer
    | UserMessagesReducerAction
    | UsersReducerAction;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActions>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AppActions>;




// For debugging
// @ts-ignore
window.store = reduxStore;
