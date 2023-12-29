import React, {FC} from 'react';
import styles from './Contacts.module.css';
import {UserFriend} from "../../../../interfaces/types";
import {Contact} from "./Contact/Contact";


type ContactsPropsType = {
    userFriendsList: Array<UserFriend>
}

export const Contacts:FC<ContactsPropsType> = ({userFriendsList}) => {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {userFriendsList.map(friend => <Contact key={friend.friendId} friend={friend} />)}
            </ul>
        </div>
    );
};
