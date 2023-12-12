import React, {FC} from 'react';
import styles from './Friend.module.css';
import {FriendItemType} from "../../../../interfaces/types";


type FriendPropsType= {
    friendData: FriendItemType
}
export const Friend: FC<FriendPropsType> = ({friendData}) => {
    return (
        <li className={styles.container}>
                <img alt='userAvatar' src={friendData.friendAvatar} className={styles.userAvatar}/>
                <span>{friendData.friendName}</span>
        </li>
    );
};