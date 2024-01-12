import React, {FC, memo} from 'react';
import styles from './Profile.module.css';
import {UserInfo} from "./UserInfo/UserInfo";
import {Posts} from "./UserPosts/Posts";

type ProfilePropsType = {  }

export const Profile: FC<ProfilePropsType> = memo(() => {
    return (
        <div className={styles.container}>
            <div className={styles.image}/>
            <div className={styles.user}>
                <UserInfo />
                <Posts />
            </div>
        </div>
    )
});