import React, {ChangeEvent, FC, useState} from 'react';
import styles from './NewPost.module.css';

type NewPostPropsType = {
    addPost: (title: string) => void
}
export const NewPost: FC<NewPostPropsType> = ({addPost}) => {
    const [title, setTitle] = useState('')

    const onTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onAddBtnClick = () => {
        addPost(title)
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