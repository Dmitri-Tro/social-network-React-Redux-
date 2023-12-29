import React, {FC} from 'react';
import styles from './Friend.module.css';
import {UserFriend} from "../../../../interfaces/types";


type FriendPropsType= {
    friend: UserFriend
}
export const Friend: FC<FriendPropsType> = ({friend}) => {
    return (
        <li className={styles.container}>
                <img alt='userAvatar' src={friend.friendAvatar} className={styles.userAvatar}/>
                <span>{friend.friendName}</span>
        </li>
    );
};