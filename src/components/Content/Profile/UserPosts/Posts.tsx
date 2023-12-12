import React, {FC} from 'react';
import styles from './Posts.module.css';
import {NewPost} from "./NewPost/NewPost";
import {PostItemType, PostsDataType} from "../../../../interfaces/types";
import {OldPosts} from "./OldPosts/OldPosts";


type PostsPropsType = {
    postsData: PostsDataType
    setPostsData: (newPost: PostItemType) => void
}

export const Posts: FC<PostsPropsType> = ({postsData, setPostsData}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>My posts</h2>
            <NewPost setPostsData={setPostsData} />
            {postsData.map((post) => <OldPosts key={post.postId} postData={post} />)}
        </div>
    );
};