import {useCallback, useState} from "react";
import {
    deletePostAC,
    updateLikesAmountAC,
    updatePostTitleAC
} from "../../../../../../store/reducers/postsReducer/postsReducer";
import {Post} from "../../../../../../interfaces/types";
import {useAppDispatch} from "../../../../../../store/reduxStore";

export const useOldPosts = (post: Post) => {
    const [postViewMode, setPostViewMode] = useState<'readonly' | 'updating'>('readonly');
    const [postTitle, setPostTitle] = useState(post.postTitle);
    const dispatch = useAppDispatch();

    const deletePost = useCallback(() => {
        dispatch(deletePostAC(post.postId));
    }, [dispatch, post.postId]);

    const updatePostTitle = useCallback(() => {
        dispatch(updatePostTitleAC(post.postId, postTitle));
        setPostViewMode('readonly');
    }, [dispatch, post.postId, postTitle]);

    const updateLikesAmount = useCallback(() => {
        dispatch(updateLikesAmountAC(post.postId));
    }, [dispatch, post.postId]);
    return {postTitle, postViewMode, setPostTitle, setPostViewMode, updatePostTitle, deletePost, updateLikesAmount}
}