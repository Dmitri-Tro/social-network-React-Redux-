import React, {FC} from 'react';
import styles from './Contacts.module.css';
import {Contact} from "./Contact/Contact";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reduxStore";
import {UsersData} from "../../../../interfaces/types";


export const Contacts:FC = () => {
    const userFriends = useSelector<RootState, UsersData>(state => state.usersData.filter(user => user.isFriend));
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {userFriends.map(friend => <Contact key={friend.userId} friend={friend} />)}
            </ul>
        </div>
    )
};
