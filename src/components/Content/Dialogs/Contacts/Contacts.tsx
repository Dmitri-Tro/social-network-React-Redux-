import React, {FC} from 'react';
import styles from './Contacts.module.css';
import {UsersDataType} from "../../../../interfaces/types";
import {Contact} from "./Contact/Contact";
import {NavLink} from "react-router-dom";


type ContactsPropsType = {
    usersData: UsersDataType
}

export const Contacts:FC<ContactsPropsType> = ({usersData}) => {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {usersData.map(user => <Contact key={user.userId} userData={user} />)}
            </ul>
        </div>
    );
};
