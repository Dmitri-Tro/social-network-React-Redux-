import React, {FC, useCallback} from "react";
import {UserCard} from "./UserCard/UserCard";
import {useUsersForeCurrentUser} from "./customHooks/useUsersForeCurrentUser";
import {Button} from "../../shared/Button/Button";
import styles from './FindUsers.module.css'


export const FindUsers: FC = () => {
const users = useUsersForeCurrentUser();
const onShowMoreBtnClick = useCallback(() => {}, []);
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {users.map(user => <UserCard key={user.userId} user={user}/>)}
            </ul>
            <Button title={'Show more'} callback={onShowMoreBtnClick} type={'main'} style={styles.showMoreBtn} />
        </div>
    )
}