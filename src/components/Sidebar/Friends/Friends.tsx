import React, {FC} from "react";
import styles from './Friends.module.css';
import {Friend} from "./Friend/Friend";
import {useFriends} from "./useFriends/useFriends";


export const Friends: FC = () => {
    const friends = useFriends();
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                { friends && friends.filter((f, i)=> i < 5).map((friend) => <Friend key={friend.id} friend={friend} />)}
            </ul>
        </div>
    )
};