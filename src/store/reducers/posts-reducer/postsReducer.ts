import {PostItemType, PostsDataType} from "../../../interfaces/types";
import {v1} from "uuid";

const ADD_NEW_POST = "Add-new-post";

type PostsReducerActionType = AddPostReducerACType

type AddPostReducerACType = ReturnType<typeof addPostReducerAC>
export const addPostReducerAC = (userId: string, title: string) => {
    return {
        type: ADD_NEW_POST,
        payload: {
            userId,
            title
        }
    } as const
}

export const postsReducer = (state: PostsDataType, action: PostsReducerActionType): PostsDataType => {
    switch (action.type) {
        case ADD_NEW_POST :
            const newPost: PostItemType = {
                likeAmount: '0',
                postId: v1(),
                postTitle: action.payload.title
            }
            return {...state, [action.payload.userId]: [newPost, ...state[action.payload.userId]]}
        default:
            return state
    }
}