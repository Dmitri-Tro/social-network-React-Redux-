import React, {FC} from 'react';
import styles from './Posts.module.css';
import {NewPost} from "./NewPost/NewPost";
import {OldPosts} from "./OldPosts/OldPosts";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reduxStore";
import {PostsData} from "../../../../interfaces/types";
import {ApiUser} from "../../../../api/users-api/usersApi";
import {Preloader} from "../../../shared/Preloader/Preloader";


export const Posts: FC = () => {
    const postsData = useSelector<RootState, PostsData>(state => state.postsData);
    const user = useSelector<RootState, ApiUser | null>(state =>
        state.userProfileData)
    if (!user) {
        return <Preloader />
    } else {
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>My posts</h2>
                <NewPost />
                {postsData.map((post) => <OldPosts key={post.postId} userAvatars={user.photos} post={post} />)}
            </div>
        )
    }
};