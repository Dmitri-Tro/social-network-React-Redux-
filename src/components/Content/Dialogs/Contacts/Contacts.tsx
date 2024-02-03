import React, {FC} from 'react';
import styles from './Contacts.module.css';
import {Contact} from "./Contact/Contact";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reduxStore";
import {User} from "../../../../interfaces/types";


export const Contacts:FC = () => {
    const friends = useSelector<RootState, User[]>(state => state.usersData.users.filter(user => user.followed));
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {friends.map(friend => <Contact key={friend.id} friend={friend} />)}
            </ul>
        </div>
    )
};
