import React, {FC, useEffect} from "react";
import styles from './Friends.module.css';
import {Friend} from "./Friend/Friend";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/reduxStore";
import {User} from "../../../interfaces/types";
import {usersApi} from "../../../api/users-api/usersApi";
import {setFriendsAC} from "../../../store/reducers/friendsReducer/friendsReducer";


export const Friends: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const uriParams = {
            friend: true
        };
        usersApi.getFriends(uriParams)
            .then(res => {
                dispatch(setFriendsAC(res.data.items, res.data.totalCount));
            })
    }, [dispatch]);
    const friends = useSelector<RootState, User[]>(state => state.friendsData.users);
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                { friends && friends.filter((f, i)=> i < 5).map((friend) => <Friend key={friend.id} friend={friend} />)}
            </ul>
        </div>
    )
};