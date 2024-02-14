import React, {FC, useEffect} from "react";
import styles from './Friends.module.css';
import {Friend} from "./Friend/Friend";
import {useAppDispatch, useAppSelector} from "../../../store/reduxStore";
import {getFriendsTC} from "../../../store/reducers/friendsReducer/friendsReducer";

export const Friends: FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getFriendsTC())
    }, [dispatch]);
    const friends = useAppSelector(state => state.friendsData.users);
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                { friends && friends.filter((f, i)=> i < 5).map((friend) => <Friend key={friend.id} friend={friend} />)}
            </ul>
        </div>
    )
};