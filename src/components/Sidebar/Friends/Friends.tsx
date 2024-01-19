import React, {FC} from "react";
import styles from './Friends.module.css';
import {Friend} from "./Friend/Friend";
import {UsersData} from "../../../interfaces/types";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reduxStore";


export const Friends: FC = () => {
    const userFriends: UsersData = useSelector<RootState, UsersData>(state => state.usersData.filter(user => user.isFriend));
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                { userFriends && userFriends.slice(0, 4).map((friend) => <Friend key={friend.userId} friend={friend} />)}
            </ul>
        </div>
    )
};