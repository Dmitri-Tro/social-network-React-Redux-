import React, {ChangeEvent, FC, useState} from 'react';
import styles from './NewMessage.module.css';
import {MessageItemType} from "../../../../../interfaces/types";
import {v4 as uuidv4} from 'uuid';

type NewMessagePropsType = {
    setMessagesData: (newMessage: MessageItemType) => void
}

export const NewMessage:FC<NewMessagePropsType> = ({setMessagesData}) => {
    const [title, setTitle] = useState('');

    const onTitleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onSentBtnClick = () => {
        const newMessage: MessageItemType = {
            messageId: uuidv4(),
            userName: 'Spongebob',
            userAvatar: 'https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true',
            message: title
        }
        setMessagesData(newMessage);
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