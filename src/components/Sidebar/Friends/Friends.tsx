import React, {FC} from "react";
import styles from './Friends.module.css';
import {UserFriend} from "../../../interfaces/types";
import {Friend} from "./Friend/Friend";

type FriendsPropsType = {
    friendsData?: Array<UserFriend>
}
export const Friends: FC<FriendsPropsType>= ({friendsData}) => {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                { friendsData && friendsData.slice(0, 4).map((friend) => <Friend key={friend.friendId} friend={friend} />)}
            </ul>
        </div>
    );
};