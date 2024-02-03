import React, {FC} from 'react';
import styles from './Profile.module.css';
import {UserInfo} from "./UserInfo/UserInfo";
import {Posts} from "./UserPosts/Posts";
import {useParams} from "react-router-dom";

type ProfilePropsType = {  }

export const Profile: FC<ProfilePropsType> = () => {
    const {userId} = useParams();
    return (
        <div className={styles.container}>
            <div className={styles.image}/>
            <div className={styles.user}>
                <UserInfo userId={userId ? Number(userId) : 30592} />
                <Posts />
            </div>
        </div>
    )
};