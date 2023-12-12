import React, {FC} from 'react';
import styles from './Contact.module.css';
import {UserItemType} from "../../../../../interfaces/types";
import {NavLink} from "react-router-dom";


type ContactPropsType = {
    userData: UserItemType
}

export const Contact: FC<ContactPropsType> = ({userData}) => {

    const path = '/dialogs/' + userData.userId;

    return (
        <li className={styles.container}>
            <NavLink to={path}>
                <img alt='userAvatar' src={userData.userAvatar} className={styles.userAvatar}/>
                <span>{userData.userName}</span>
            </NavLink>
        </li>
    );
};