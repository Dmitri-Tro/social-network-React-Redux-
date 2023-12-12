import React, {ChangeEvent, FC, useState} from 'react';
import styles from './NewPost.module.css';
import {PostItemType} from "../../../../../interfaces/types";
import {v4 as uuidv4} from 'uuid';

type NewPostPropsType = {
    setPostsData: (newPost: PostItemType) => void
}
export const NewPost: FC<NewPostPropsType> = ({setPostsData}) => {
    const [title, setTitle] = useState('')

    const onTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onAddBtnClick = () => {
        const newPost: PostItemType = {
            likeAmount: '0',
            postId: uuidv4(),
            postTitle: title
        }
        setPostsData(newPost)
        setTitle('')
    }

    const onCancelBtnClick = () => {
        setTitle('')
    }

    return (
        <div className={styles.container}>
            <textarea className={styles.textarea} wrap='hard'
                      placeholder='Write new post'
                      value={title}
                      onChange={onTitleChange}
            />
            <div className={styles.buttons}>
                <button className={`${styles.button_addPost} ${styles.button}`} onClick={onAddBtnClick} >Add post</button>
                <button className={`${styles.button_cancel} ${styles.button}`} onClick={onCancelBtnClick}>Cancel</button>
            </div>
        </div>
    );
};