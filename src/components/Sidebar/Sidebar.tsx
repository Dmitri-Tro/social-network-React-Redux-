import React, {FC} from 'react';
import styles from './Sidebar.module.css';
import {Friends} from "./Friends/Friends";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reduxStore";
import {UserAuthData} from "../../interfaces/types";


export const Sidebar:FC = () => {
    const authData = useSelector<RootState, UserAuthData>(state => state.userAuthData);
    return (
        <div className={styles.container}>
                <nav className={styles.navigation}>
                    <ul>
                        <li className={styles.item}>
                            <NavLink to={'/profile'}
                                     className={({isActive}) => [isActive ? styles.item_link_active : styles.item_link].join(' ')}>Profile</NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to={'/dialogs'}
                                     className={({isActive}) => [isActive ? styles.item_link_active : styles.item_link].join(' ')}>Dialogs</NavLink>
                        </li>
                        <li className={styles.item}>
                            Newsfeed
                        </li>
                        <li className={styles.item}>
                            Friends
                        </li>
                        <li className={styles.item}>
                            <NavLink to={'/find'}
                                     className={({isActive}) => [isActive ? styles.item_link_active : styles.item_link].join(' ')}>Find users</NavLink>
                        </li>
                        <li className={styles.item}>
                            Settings
                        </li>
                    </ul>
                </nav>
            {authData.isLogin && <Friends/>}
        </div>
    )
};