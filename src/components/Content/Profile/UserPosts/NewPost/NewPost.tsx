import React from 'react';
import styles from './NewPost.module.css';


export const NewPost = () => {
    return (
        <div className={styles.container}>
            <textarea className={styles.textarea} wrap='hard'
                      placeholder='Write new post' />
            <div className={styles.buttons}>
                <button className={`${styles.button_addPost} ${styles.button}`}>Add post</button>
                <button className={`${styles.button_cancel} ${styles.button}`}>Cancel</button>
            </div>
        </div>
    );
};