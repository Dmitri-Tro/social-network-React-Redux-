import {combineReducers, createStore} from "redux";
import {messagesReducer} from "./reducers/messages-reducer/messagesReducer";
import {postsReducer} from "./reducers/posts-reducer/postsReducer";


const rootReducer = combineReducers(
    {
        // usersData: xxxReducer,
        // friendsData: yyyReducer,
        messagesData: messagesReducer,
        postsData: postsReducer,
    }
)

export type RootState = ReturnType<typeof rootReducer>

export const reduxStore = createStore(rootReducer);


// @ts-ignore
window.store = reduxStore;
