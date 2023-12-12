import React, {FC} from 'react';
import styles from './Sidebar.module.css';
import {Friends} from "./Friends/Friends";
import {Link, NavLink} from "react-router-dom";
import {FriendsDataType} from "../../interfaces/types";

type SidebarPropsType = {
    friendsData: FriendsDataType,
}

export const Sidebar:FC<SidebarPropsType> = ({friendsData}) => {
    return (
        <div className={styles.container}>
            <nav className={styles.navigation}>
                <ul>
                    <li className={styles.item} >
                        <NavLink to={'/profile'} className={({isActive}) => [isActive ? styles.item_link_active : styles.item_link].join(' ')}>Profile</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to={'/dialogs'} className={({isActive}) => [isActive ? styles.item_link_active : styles.item_link].join(' ')}>Dialogs</NavLink>
                    </li>
                    <li className={styles.item}>
                        News
                    </li>
                    <li className={styles.item}>
                        Music
                    </li>
                    <li className={styles.item}>
                        Settings
                    </li>
                </ul>
            </nav>
            <Friends friendsData={friendsData} />
        </div>
    );
};