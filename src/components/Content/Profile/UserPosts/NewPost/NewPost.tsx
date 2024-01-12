import React, {ChangeEvent, FC, memo, useState} from 'react';
import styles from './NewPost.module.css';
import {useDispatch} from "react-redux";
import {addPostAC} from "../../../../../store/reducers/postsReducer/postsReducer";
import {Button} from "../../../../shared/Button/Button";
import {Textarea} from "../../../../shared/Textarea/Textarea";

type NewPostProps = {  }
export const NewPost: FC<NewPostProps> = memo(() => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const onTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value);
    };
    const onAddBtnClick = () => {
        dispatch(addPostAC(title));
        setTitle('');
    };
    const onCancelBtnClick = () => {
        setTitle('');
    };

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
});