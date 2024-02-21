import React, { FC } from "react";
import styles from "./Contacts.module.css";
import { Contact } from "./Contact/Contact";
import { useAppSelector } from "store/reduxStore";
import { selectFriends } from "store/reducers/friendsReducer/friendsSelectors";

export const Contacts: FC = () => {
    const friends = useAppSelector(selectFriends);
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {friends.map((friend) => (
                    <Contact key={friend.id} friend={friend} />
                ))}
            </ul>
        </div>
    );
};
