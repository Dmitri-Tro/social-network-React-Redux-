import React, {FC} from 'react';
import styles from './UserInfo.module.css';

type UserInfoPropsType = {

}

export const UserInfo:FC<UserInfoPropsType> = () => {
    return (
        <div className={styles.info}>
            <img className={styles.image} alt='user_image'
                 src='https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true'/>
            <div className={styles.description}>
                <h2 className={styles.name}>Spongebob</h2>
                <h2 className={styles.lastname}>Square Pants</h2>
                <div className={styles.infoBlock}>
                    <span className={`${styles.default} ${styles.item}`}>Birthday:&nbsp;</span>
                    <span className={styles.item}>14.07.1986</span>
                </div>
                <div className={styles.infoBlock}>
                    <span className={`${styles.default} ${styles.item}`}>City:&nbsp;</span>
                    <span className={styles.item}>Bikini-Bottom</span>
                </div>
                <div className={styles.infoBlock}>
                    <span className={`${styles.default} ${styles.item}`}>Occupation:&nbsp;</span>
                    <span className={styles.item}>Cook</span>
                </div>
                <div className={styles.infoBlock}>
                    <span className={`${styles.default} ${styles.item}`}>Quot:&nbsp;</span>
                    <span className={styles.item}>"If you believe in yourself, with a tiny pinch of magic all your dreams can come true!"</span>
                </div>
            </div>
        </div>
    );
};