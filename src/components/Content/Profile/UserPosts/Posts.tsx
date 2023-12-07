import React from 'react';
import styles from './Posts.module.css';
import {NewPost} from "./NewPost/NewPost";

export const Posts = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>My posts</h2>
            <NewPost />
            {/*postsElements*/}
        </div>
    );
};