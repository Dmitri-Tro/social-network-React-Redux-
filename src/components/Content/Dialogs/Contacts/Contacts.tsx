import React, {FC} from 'react';
import styles from './Contacts.module.css';
import {Contact} from "./Contact/Contact";
import {useAppSelector} from "../../../../store/reduxStore";


export const Contacts:FC = () => {
    const friends = useAppSelector(state => state.usersData.users.filter(user => user.followed));
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {friends.map(friend => <Contact key={friend.id} friend={friend} />)}
            </ul>
        </div>
    )
};
