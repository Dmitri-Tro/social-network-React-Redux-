import React, { FC, useEffect } from "react";
import styles from "./Friends.module.css";
import { Friend } from "./Friend/Friend";
import { useAppDispatch, useAppSelector } from "store/reduxStore";
import { getFriendsTC } from "store/reducers/friendsReducer/friendsReducer";
import { selectFriends } from "store/reducers/friendsReducer/friendsSelectors";

export const Friends: FC = () => {
    const dispatch = useAppDispatch();
    const friends = useAppSelector(selectFriends);
    useEffect(() => {
        dispatch(getFriendsTC()); // get user friends, set to state and show on sidebar
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {friends && friends.filter((f, i) => i < 5).map((friend) => <Friend key={friend.id} friend={friend} />)}
            </ul>
        </div>
    );
};
