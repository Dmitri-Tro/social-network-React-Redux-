import React, {FC} from 'react';
import styles from './Posts.module.css';
import {NewPost} from "./NewPost/NewPost";
import {PostItemType, PostsDataType, UserItemType} from "../../../../interfaces/types";
import {OldPosts} from "./OldPosts/OldPosts";


type PostsPropsType = {
    user: UserItemType
    postsData: Array<PostItemType>
    addPost: (title: string) => void
}

export const Posts: FC<PostsPropsType> = ({user,postsData, addPost}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>My posts</h2>
            <NewPost addPost={addPost} />
            {postsData.map((post) => <OldPosts key={post.postId} userAvatar={user.userAvatar} postData={post} />)}
        </div>
    );
};