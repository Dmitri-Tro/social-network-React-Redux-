import React, {FC, memo} from 'react';
import styles from './Contact.module.css';
import {NavLink} from "react-router-dom";
import {User} from "../../../../../interfaces/types";
import {defaultAvatar} from "../../../../../images/images";

type ContactPropsType = {
    friend: User
}

export const Contact: FC<ContactPropsType> = memo(({friend}) => {
    return (
        <li className={styles.container}>
            <NavLink to={`/dialogs/${friend.id}`}>
                <img alt='userAvatar' src={friend.photos.small || defaultAvatar} className={styles.userAvatar}/>
                <span>{friend.name}</span>
            </NavLink>
        </li>
    )
});