import React, {FC, memo} from 'react';
import styles from './Friend.module.css';
import {User} from "../../../../interfaces/types";


type FriendPropsType= {
    friend: User
}
export const Friend: FC<FriendPropsType> = memo(
    ({friend}) => {
        return (
            <li className={styles.container}>
                <img alt='userAvatar' src={friend.userAvatar} className={styles.userAvatar}/>
                <span>{friend.userName}</span>
            </li>
        );
    }
);