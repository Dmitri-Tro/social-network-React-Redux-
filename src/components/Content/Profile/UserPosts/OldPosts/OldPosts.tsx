import React, { FC, memo } from "react";
import styles from "./OldPosts.module.css";
import { Post } from "interfaces/types";
import { Button } from "components/shared/Button/Button";
import { Textarea } from "components/shared/Textarea/Textarea";
import { defaultAvatar } from "images/images";
import { useOldPosts } from "./useOldPosts/useOldPosts";

type OldPostsProps = {
    userAvatars: {
        small: string | null;
        large: string | null;
    };
    post: Post;
};

export const OldPosts: FC<OldPostsProps> = memo(({ userAvatars, post }) => {
    const { postTitle, postViewMode, setPostTitle, setPostViewMode, updatePostTitle, deletePost, updateLikesAmount } =
        useOldPosts(post);

    return (
        <div className={styles.container}>
            <div className={styles.post}>
                <img className={styles.userAvatar} src={userAvatars.small || defaultAvatar} alt="user_avatar" />
                {postViewMode === "readonly" && (
                    <p onDoubleClick={() => setPostViewMode("updating")} className={styles.postText}>
                        {post.postTitle}
                    </p>
                )}
                {postViewMode === "updating" && (
                    <Textarea
                        value={postTitle}
                        callback={(e) => setPostTitle(e.currentTarget.value)}
                        onBlurCallback={updatePostTitle}
                        autoFocus
                        style={styles.postTextarea}
                    />
                )}
                <Button title={"x"} callback={deletePost} type={"secondary"} style={styles.delBtn} />
            </div>
            <div className={styles.likes}>
                <span className={styles.likeAmount}>{post.likeAmount}</span>
                <Button
                    title={"like"}
                    callback={updateLikesAmount}
                    type={post.isLiked ? "main" : "secondary"}
                    style={styles.like}
                />
            </div>
        </div>
    );
});
