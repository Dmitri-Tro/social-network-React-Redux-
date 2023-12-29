import React, {FC} from 'react';
import styles from './Contact.module.css';
import {UserFriend} from "../../../../../interfaces/types";
import {NavLink} from "react-router-dom";


type ContactPropsType = {
    friend: UserFriend
}

export const Contact: FC<ContactPropsType> = ({friend}) => {

    const path = '/dialogs/' + friend.friendId;

    return (
        <li className={styles.container}>
            <NavLink to={path}>
                <img alt='userAvatar' src={friend.friendAvatar} className={styles.userAvatar}/>
                <span>{friend.friendName}</span>
            </NavLink>
        </li>
    );
};