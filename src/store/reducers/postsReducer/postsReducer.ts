import { Post, PostsData } from "interfaces/types";
import { v1 } from "uuid";
import { AppThunk } from "store/reduxStore";
import { setIsFetchingAC } from "store/reducers/appReducer/appReducer";

const ADD_NEW_POST = "Add-new-post";
const UPDATE_LIKES_AMOUNT = "Update-likes-amount";
const DELETE_POST = "Delete-post";
const UPDATE_POST_TITLE = "Update-post-title";

const initialState: PostsData = [
    {
        postId: "03",
        postTitle:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat velit consectetur qui dignissimos minus deserunt in distinctio! Expedita odio dignissimos maxime rem tempore? Saepe perferendis necessitatibus repellat id quibusdam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat velit consectetur qui dignissimos minus deserunt in distinctio! Expedita odio dignissimos maxime rem tempore? Saepe perferendis necessitatibus repellat id quibusdam?",
        likeAmount: 0,
        isLiked: false,
    },
    {
        postId: "02",
        postTitle: "It's my second post!",
        likeAmount: 100,
        isLiked: true,
    },
    {
        postId: "01",
        postTitle: "Hi, how are you?",
        likeAmount: 98,
        isLiked: false,
    },
];

export const postsReducer = (state: PostsData = initialState, action: PostsReducerAction): PostsData => {
    switch (action.type) {
        case ADD_NEW_POST:
            const newPost: Post = {
                postId: v1(),
                postTitle: action.payload.title,
                likeAmount: 0,
                isLiked: false,
            };
            return [newPost, ...state];
        case UPDATE_LIKES_AMOUNT:
            return state.map((post) =>
                post.postId === action.payload.postId
                    ? post.isLiked
                        ? { ...post, likeAmount: post.likeAmount - 1, isLiked: false }
                        : { ...post, likeAmount: post.likeAmount + 1, isLiked: true }
                    : post,
            );
        case DELETE_POST:
            return state.filter((post) => post.postId !== action.payload.postId);
        case UPDATE_POST_TITLE:
            return state.map((post) =>
                post.postId === action.payload.postId ? { ...post, postTitle: action.payload.newTitle } : post,
            );
        default:
            return state;
    }
};

// Actions
export const addPostAC = (title: string) => {
    return {
        type: ADD_NEW_POST,
        payload: {
            title,
        },
    } as const;
};

export const updateLikesAmountAC = (postId: string) => {
    return {
        type: UPDATE_LIKES_AMOUNT,
        payload: {
            postId,
        },
    } as const;
};
export const deletePostAC = (postId: string) => {
    return {
        type: DELETE_POST,
        payload: {
            postId,
        },
    } as const;
};

export const updatePostTitleAC = (postId: string, newTitle: string) => {
    return {
        type: UPDATE_POST_TITLE,
        payload: {
            postId,
            newTitle,
        },
    } as const;
};

// Thunks
export const addPostTC =
    (title: string): AppThunk =>
    (dispatch) => {
        dispatch(setIsFetchingAC(true));
        dispatch(addPostAC(title));
        dispatch(setIsFetchingAC(false));
    };
export const updateLikesAmountTC =
    (postId: string): AppThunk =>
    (dispatch) => {
        dispatch(setIsFetchingAC(true));
        dispatch(updateLikesAmountAC(postId));
        dispatch(setIsFetchingAC(false));
    };
export const deletePostTC =
    (postId: string): AppThunk =>
    (dispatch) => {
        dispatch(setIsFetchingAC(true));
        dispatch(deletePostAC(postId));
        dispatch(setIsFetchingAC(false));
    };
export const updatePostTitleTC =
    (postId: string, newTitle: string): AppThunk =>
    (dispatch) => {
        dispatch(setIsFetchingAC(true));
        dispatch(updatePostTitleAC(postId, newTitle));
        dispatch(setIsFetchingAC(false));
    };

// Types
export type PostsReducerAction =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateLikesAmountAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof updatePostTitleAC>;
