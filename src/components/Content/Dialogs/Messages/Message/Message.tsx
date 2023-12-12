import React, {FC} from 'react';
import styles from './Message.module.css';
import {MessageItemType} from "../../../../../interfaces/types";


type MessagePropsType = {
    messageData: MessageItemType
}

export const Message:FC<MessagePropsType> = ({messageData}) => {
    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <img className={styles.userAvatar} src={messageData.userAvatar} alt='user_avatar'/>
                <span className={styles.userName}>{messageData.userName}</span>
            </div>
            <p className={styles.message}>{messageData.message}</p>
        </div>
    );
};