import React, {ChangeEvent, FC, useState} from 'react';
import styles from './NewMessage.module.css';
import {MessageItemType} from "../../../../../interfaces/types";
import {v4 as uuidv4} from 'uuid';

type NewMessagePropsType = {
    createNewMessage: (title: string) => void
}

export const NewMessage:FC<NewMessagePropsType> = ({createNewMessage}) => {
    const [title, setTitle] = useState('');

    const onTitleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onSentBtnClick = () => {
        createNewMessage(title);
        setTitle('');
    };

    const onCancelBtnClick = () => {
        setTitle('');
    };

    return (
        <div className={styles.container}>
            <textarea
                className={styles.textarea}  wrap='hard'
                      placeholder='Write new message'
            value={title}
            onChange={onTitleInputChange}
            />
            <div className={styles.buttons}>
                <button className={`${styles.button_send} ${styles.button}`} onClick={onSentBtnClick}>Sent</button>
                <button className={`${styles.button_cancel} ${styles.button}`} onClick={onCancelBtnClick}>Cancel</button>
            </div>
        </div>
    );
};