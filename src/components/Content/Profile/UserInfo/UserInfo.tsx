import React, {FC, useReducer} from 'react';
import styles from './UserInfo.module.css';
import {UserItemType, UsersDataType} from "../../../../interfaces/types";

type UserInfoPropsType = {
    user: UserItemType
}

export const UserInfo:FC<UserInfoPropsType> = ({user}) => {
    return (
        <div className={styles.info}>
            <img className={styles.image} alt='user_image'
                 src={user.userAvatar}/>
            <div className={styles.description}>
                <h2 className={styles.name}>{user.userName}</h2>
                <div className={styles.infoBlock}>
                    <span className={`${styles.default} ${styles.item}`}>Birthday:&nbsp;</span>
                    <span className={styles.item}>{user.userBirthday}</span>
                </div>
                <div className={styles.infoBlock}>
                    <span className={`${styles.default} ${styles.item}`}>City:&nbsp;</span>
                    <span className={styles.item}>{user.userCityAddress}</span>
                </div>
                <div className={styles.infoBlock}>
                    <span className={`${styles.default} ${styles.item}`}>Occupation:&nbsp;</span>
                    <span className={styles.item}>{user.userOccupation}</span>
                </div>
                <div className={styles.infoBlock}>
                    <span className={`${styles.default} ${styles.item}`}>Quot:&nbsp;</span>
                    <span className={styles.item}>{user.userQuot}</span>
                </div>
            </div>
        </div>
    );
};