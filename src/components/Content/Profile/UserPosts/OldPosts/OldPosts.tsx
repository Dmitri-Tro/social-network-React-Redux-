import React, {FC, memo} from 'react';
import styles from './OldPosts.module.css';
import {Post} from "../../../../../interfaces/types";
import {Button} from "../../../../shared/Button/Button";
import {Textarea} from "../../../../shared/Textarea/Textarea";
import {defaultAvatar} from "../../../../../images/images";
import {useOldPosts} from "./useOldPosts/useOldPosts";

type OldPostsProps = {
    userAvatar: string
    post: Post
}

export const OldPosts: FC<OldPostsProps> = memo(({userAvatar, post}) => {

    const {
        postTitle,
        postViewMode,
        setPostTitle,
        setPostViewMode,
        updatePostTitle,
        deletePost,
        updateLikesAmount
    } = useOldPosts(post);

    return (
        <div className={styles.container}>
            <div className={styles.post}>
                <img className={styles.userAvatar}
                     src={userAvatar || defaultAvatar}
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