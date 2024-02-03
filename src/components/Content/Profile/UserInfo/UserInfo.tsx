import React, {FC, useEffect} from 'react';
import styles from './UserInfo.module.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/reduxStore";
import {defaultAvatar} from "../../../../images/images";
import {ApiUser, usersApi} from "../../../../api/users-api/usersApi";
import {setIsFetchingAC} from "../../../../store/reducers/usersReducer/usersReducer";
import {setUserProfileAC} from "../../../../store/reducers/profileReducer/profileReducer";
import {Preloader} from "../../../shared/Preloader/Preloader";

type UserInfoProps = {
    userId: number
}
export const UserInfo: FC<UserInfoProps> = ({userId}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsFetchingAC(true));
        usersApi.getUserProfile(userId)
            .then(res => {
                dispatch(setIsFetchingAC(false));
                dispatch(setUserProfileAC(res.data));
            })
    }, [dispatch, userId]);

    const user = useSelector<RootState, ApiUser | null>(state => state.userProfileData);

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