import React, {FC, memo} from "react";
import styles from './Friends.module.css';
import {Friend} from "./Friend/Friend";
import {FriendsData} from "../../../interfaces/types";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reduxStore";

type FriendsPropsType = {  }
export const Friends: FC<FriendsPropsType>= memo(() => {
    const userFriends: FriendsData = useSelector<RootState, FriendsData>(state => state.friendsData);
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                { userFriends && userFriends.slice(0, 4).map((friend) => <Friend key={friend.userId} friend={friend} />)}
            </ul>
        </div>
    )
});