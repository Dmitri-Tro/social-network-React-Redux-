import React, {FC, memo, useState} from 'react';
import styles from './OldPosts.module.css';
import {Post} from "../../../../../interfaces/types";
import {Button} from "../../../../shared/Button/Button";
import {useDispatch} from "react-redux";
import {
    deletePostAC,
    updateLikesAmountAC,
    updatePostTitleAC
} from "../../../../../store/reducers/postsReducer/postsReducer";
import {Textarea} from "../../../../shared/Textarea/Textarea";

type OldPostsProps = {
    userAvatar: string
    post: Post
}

export const OldPosts: FC<OldPostsProps> = memo(({userAvatar, post}) => {
    const [postViewMode, setPostViewMode] = useState<'readonly' | 'updating'>('readonly');
    const [postTitle, setPostTitle] = useState(post.postTitle);
    const dispatch = useDispatch();
    const deletePost = () => {
        dispatch(deletePostAC(post.postId));
    };
    const updatePostTitle = () => {
        dispatch(updatePostTitleAC(post.postId, postTitle));
        setPostViewMode('readonly');
    };
    const updateLikesAmount = () => {
        dispatch(updateLikesAmountAC(post.postId));
    };

    return (
        <div className={styles.container}>
            <div className={styles.post}>
                <img className={styles.userAvatar}
                     src={userAvatar}
                     alt='user_avatar'/>
                {postViewMode === 'readonly' &&
                    <p onDoubleClick={() => setPostViewMode('updating')}
                       className={styles.postText}>{post.postTitle}</p>
                }
                {postViewMode === 'updating' &&
                    <Textarea
                        value={postTitle}
                        callback={e => setPostTitle(e.currentTarget.value)}
                        onBlurCallback={updatePostTitle}
                        autoFocus
                        style={styles.postTextarea}
                    />
                }
                <Button title={'x'}
                        callback={deletePost}
                        type={'secondary'}
                        style={styles.delBtn}
                />
            </div>
            <div className={styles.likes}>
                <span className={styles.likeAmount}>{post.likeAmount}</span>
                <Button title={'like'}
                        callback={updateLikesAmount}
                        type={post.isLiked ? "main" : "secondary"}
                        style={styles.like}
                />
            </div>
        </div>
    )
});