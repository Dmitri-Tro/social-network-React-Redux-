import React, {FC} from 'react';
import styles from './Contacts.module.css';
import {Contact} from "./Contact/Contact";
import {useFriends} from "../../../Sidebar/Friends/useFriends/useFriends";


export const Contacts:FC = () => {
    const userFriends = useFriends();
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {userFriends.map(friend => <Contact key={friend.id} friend={friend} />)}
            </ul>
        </div>
    )
};
