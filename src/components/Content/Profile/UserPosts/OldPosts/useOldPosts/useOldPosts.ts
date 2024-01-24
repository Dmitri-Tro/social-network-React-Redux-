import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {
    deletePostAC,
    updateLikesAmountAC,
    updatePostTitleAC
} from "../../../../../../store/reducers/postsReducer/postsReducer";
import {Post} from "../../../../../../interfaces/types";

export const useOldPosts = (post: Post) => {
    const [postViewMode, setPostViewMode] = useState<'readonly' | 'updating'>('readonly');
    const [postTitle, setPostTitle] = useState(post.postTitle);
    const dispatch = useDispatch();

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