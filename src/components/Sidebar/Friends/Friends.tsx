import React, {FC} from "react";
import styles from './Friends.module.css';
import {FriendsDataType} from "../../../interfaces/types";
import {Friend} from "./Friend/Friend";

type FriendsPropsType = {
    friendsData: FriendsDataType,
}
export const Friends: FC<FriendsPropsType>= ({friendsData}) => {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {friendsData.map((friend) => <Friend key={friend.friendId} friendData={friend} />)}
            </ul>
        </div>
    );
};