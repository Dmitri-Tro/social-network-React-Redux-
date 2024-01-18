import React, {FC} from 'react';
import styles from './Contacts.module.css';
import {Contact} from "./Contact/Contact";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reduxStore";
import {FriendsData} from "../../../../interfaces/types";


export const Contacts:FC = () => {
    const userFriends = useSelector<RootState, FriendsData>(state => state.friendsData);
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {userFriends.map(friend => <Contact key={friend.userId} friend={friend} />)}
            </ul>
        </div>
    )
};
