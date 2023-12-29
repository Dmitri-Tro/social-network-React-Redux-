import React, {FC} from 'react';
import styles from './Message.module.css';
import {MessageItemType, UserItemType} from "../../../../../interfaces/types";


type MessagePropsType = {
    creator: UserItemType
    message: MessageItemType
}

export const Message:FC<MessagePropsType> = ({creator, message}) => {
    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <img className={styles.userAvatar} src={creator.userAvatar} alt='user_avatar'/>
                <span className={styles.userName}>{creator.userName}</span>
            </div>
            <p className={styles.message}>{message.message}</p>
        </div>
    );
};