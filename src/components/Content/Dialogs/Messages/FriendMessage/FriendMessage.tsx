import React, {FC, memo} from 'react';
import styles from './FriendMessage.module.css';
import {FriendMessage, UsersData} from "../../../../../interfaces/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../store/reduxStore";
import {Button} from "../../../../shared/Button/Button";
import {deleteFriendMessageAC} from "../../../../../store/reducers/friendsMessagesReducer/friendsMessagesReducer";

type FriendMessageProps = {
    message: FriendMessage
}

export const FriendsMessage:FC<FriendMessageProps> = memo(({message}) => {
    const friends = useSelector<RootState, UsersData>(state => state.usersData.filter(user => user.isFriend));
    const creator = friends.find(friend => friend.userId === message.sendFromFriendId)!;
    const dispatch = useDispatch();

    const deleteFriendMessage = () => {
        dispatch(deleteFriendMessageAC(message.messageId));
    }

    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <img className={styles.userAvatar} src={creator.userAvatar} alt='user_avatar'/>
                <span className={styles.time}>{message.time}</span>
            </div>
            <div className={styles.messageContent}>
                <p className={styles.message}>{message.message}</p>
                <Button title={'x'}
                        callback={deleteFriendMessage}
                        type={'secondary'}
                        style={styles.delBtn}
                />
            </div>
        </div>
    )
});