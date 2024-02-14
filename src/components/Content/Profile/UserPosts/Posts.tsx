import React, {FC} from 'react';
import styles from './Posts.module.css';
import {NewPost} from "./NewPost/NewPost";
import {OldPosts} from "./OldPosts/OldPosts";
import {useAppSelector} from "../../../../store/reduxStore";
import {Preloader} from "../../../shared/Preloader/Preloader";


export const Posts: FC = () => {
    const postsData = useAppSelector(state => state.postsData);
    const user = useAppSelector(state => state.userProfileData.profile)
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