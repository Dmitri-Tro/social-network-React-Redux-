import React, {FC, memo} from 'react';
import styles from './Contact.module.css';
import {NavLink} from "react-router-dom";
import {User} from "../../../../../interfaces/types";

type ContactPropsType = {
    friend: User
}

export const Contact: FC<ContactPropsType> = memo(({friend}) => {
    const path = '/dialogs/' + friend.userId;
    return (
        <li className={styles.container}>
            <NavLink to={path}>
                <img alt='userAvatar' src={friend.userAvatar} className={styles.userAvatar}/>
                <span>{friend.userName}</span>
            </NavLink>
        </li>
    )
});