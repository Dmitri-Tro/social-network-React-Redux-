import React, { FC, memo } from "react";
import styles from "./Friend.module.css";
import { User } from "interfaces/types";
import { defaultAvatar } from "images/images";

type FriendPropsType = {
    friend: User;
};
export const Friend: FC<FriendPropsType> = memo(({ friend }) => {
    return (
        <li className={styles.container}>
            <img alt="userAvatar" src={friend.photos.small || defaultAvatar} className={styles.userAvatar} />
            <span>{friend.name}</span>
        </li>
    );
});
