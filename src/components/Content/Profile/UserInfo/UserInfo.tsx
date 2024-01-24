import React, {FC} from 'react';
import styles from './UserInfo.module.css';
import {UserAuthData} from "../../../../interfaces/types";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reduxStore";
import {defaultAvatar} from "../../../../images/images";


export const UserInfo:FC = () => {

    const user = useSelector<RootState, UserAuthData>(state => state.userAuthData);

    return (
        <div className={styles.info}>
            <img className={styles.image} alt='user_image'
                 src={user.avatar || defaultAvatar}/>
            <div className={styles.description}>
                <h2 className={styles.name}>{user.name}</h2>
                <div className={styles.infoBlock}>
                    <span className={`${styles.default} ${styles.item}`}>Birthday:&nbsp;</span>
                    <span className={styles.item}>{user.birthday}</span>
                </div>
                <div className={styles.infoBlock}>
                    <span className={`${styles.default} ${styles.item}`}>City:&nbsp;</span>
                    <span className={styles.item}>{user.cityAddress}</span>
                </div>
                <div className={styles.infoBlock}>
                    <span className={`${styles.default} ${styles.item}`}>Occupation:&nbsp;</span>
                    <span className={styles.item}>{user.occupation}</span>
                </div>
                <div className={styles.infoBlock}>
                    <span className={`${styles.default} ${styles.item}`}>Quot:&nbsp;</span>
                    <span className={styles.item}>{user.quot}</span>
                </div>
            </div>
        </div>
    );
};