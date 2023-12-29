import React, {FC} from 'react';
import styles from './FriendMessage.module.css';
import {MessageItemType, UserFriend} from "../../../../../interfaces/types";


type MessagePropsType = {
    creator: UserFriend
    message: MessageItemType
}

export const FriendMessage:FC<MessagePropsType> = ({creator, message}) => {
    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <img className={styles.userAvatar} src={creator.friendAvatar} alt='user_avatar'/>
                <span className={styles.userName}>{creator.friendName}</span>
            </div>
            <p className={styles.message}>{message.message}</p>
        </div>
    );
};