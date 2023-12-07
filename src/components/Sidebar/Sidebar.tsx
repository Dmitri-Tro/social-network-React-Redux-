import React from 'react';
import styles from './Sidebar.module.css';
import {Profile} from "../Content/Profile/Profile";
import {Dialogs} from "../Content/Dialogs/Dialogs";
import {Friends} from "./Friends/Friends";

export const Sidebar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navigation}>
                <ul>
                    <li className={styles.item}>
                        Profile
                        {/*<Profile />*/}
                    </li>
                    <li className={styles.item}>
                        Dialogs
                        {/*<Dialogs />*/}
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
            <Friends />
        </div>
    );
};