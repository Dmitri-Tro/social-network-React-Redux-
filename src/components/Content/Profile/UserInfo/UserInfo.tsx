import React, {FC, useEffect} from 'react';
import styles from './UserInfo.module.css';
import {useAppDispatch, useAppSelector} from "../../../../store/reduxStore";
import {defaultAvatar} from "../../../../images/images";
import {Preloader} from "../../../shared/Preloader/Preloader";
import {
    getUserProfileTC,
    updateUserStatusTC
} from "../../../../store/reducers/profileReducer/profileReducer";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";

type UserInfoProps = {
    userId: number
}
export const UserInfo: FC<UserInfoProps> = ({userId}) => {
    const user = useAppSelector(state => state.userProfileData.profile);
    const isFetching = useAppSelector(state => state.usersData.isFetching);
    const userStatus = useAppSelector(state => state.userProfileData.status);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getUserProfileTC(userId))
    }, [dispatch, userId]);

    const setNewStatus = (status: string) => {
        dispatch(updateUserStatusTC(status))
    }

    if (!user) {
        return (
            <div className={styles.info}>
                <Preloader/>
            </div>
        )
    } else {
        return (
            <div className={styles.info}>
                <img className={styles.image} alt='user_image'
                     src={user.photos.large || user.photos.small || defaultAvatar}/>
                <div className={styles.description}>
                    <h2 className={styles.name}>{user.fullName}</h2>
                    <ProfileStatus oldTitle={userStatus}
                                   setNewTitle={setNewStatus}
                                   disabled={isFetching}
                                   placeholder={'Write your status...'}
                                   stylesClass={styles.profileStatus}
                    />
                    <div className={styles.infoBlock}>
                        <span className={`${styles.default} ${styles.item}`}>Main contact:&nbsp;</span>
                        <span className={styles.item}>{user.contacts.mainLink}</span>
                    </div>
                    <div className={styles.infoBlock}>
                        <span className={`${styles.default} ${styles.item}`}>GitHub:&nbsp;</span>
                        <span className={styles.item}>{user.contacts.github}</span>
                    </div>
                    <div className={styles.infoBlock}>
                        <span className={`${styles.default} ${styles.item}`}>Looking for a job:&nbsp;</span>
                        <span className={styles.item}>{user.lookingForAJobDescription}</span>
                    </div>
                </div>
            </div>
        );
    }
};