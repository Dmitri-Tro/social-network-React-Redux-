import React, {FC, memo} from 'react';
import styles from './Contacts.module.css';
import {Contact} from "./Contact/Contact";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reduxStore";
import {FriendsData} from "../../../../interfaces/types";

type ContactsProps = {  }

export const Contacts:FC<ContactsProps> = memo(() => {
    const userFriends = useSelector<RootState, FriendsData>(state => state.friendsData);
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {userFriends.map(friend => <Contact key={friend.userId} friend={friend} />)}
            </ul>
        </div>
    )
});
