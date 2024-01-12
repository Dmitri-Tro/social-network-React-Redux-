import React, {FC, memo} from 'react';
import styles from './Posts.module.css';
import {NewPost} from "./NewPost/NewPost";
import {OldPosts} from "./OldPosts/OldPosts";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reduxStore";
import {PostsData} from "../../../../interfaces/types";

type PostsProps = {  }

export const Posts: FC<PostsProps> = memo(() => {
    const postsData = useSelector<RootState, PostsData>(state => state.postsData);
    const userAvatar = useSelector<RootState, string>(state => state.userAuthData.avatar)
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>My posts</h2>
            <NewPost />
            {postsData.map((post) => <OldPosts key={post.postId} userAvatar={userAvatar} post={post} />)}
        </div>
    )
});