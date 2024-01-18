import React, {ChangeEvent, FC, useCallback, useState} from 'react';
import styles from './NewPost.module.css';
import {useDispatch} from "react-redux";
import {addPostAC} from "../../../../../store/reducers/postsReducer/postsReducer";
import {Button} from "../../../../shared/Button/Button";
import {Textarea} from "../../../../shared/Textarea/Textarea";

export const NewPost: FC = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const onTitleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value);
    }, []);
    const onAddBtnClick = useCallback(() => {
        dispatch(addPostAC(title));
        setTitle('');
    }, [dispatch, title]);
    const onCancelBtnClick = useCallback(() => {
        setTitle('');
    }, []);

    return (
        <div className={styles.container}>
            <Textarea value={title}
                      callback={onTitleChange}
                      placeholder='Write new post'
                      style={styles.textarea}
            />
            <div className={styles.buttons}>
                <Button title={'Add post'}
                        callback={onAddBtnClick}
                        type={"main"}
                        style={styles.button}
                        isDisabled={!title.trim()}
                />
                <Button title={'Cancel'}
                        callback={onCancelBtnClick}
                        type={"secondary"}
                        style={styles.button}
                        isDisabled={!title.trim()}
                />
            </div>
        </div>
    )
};