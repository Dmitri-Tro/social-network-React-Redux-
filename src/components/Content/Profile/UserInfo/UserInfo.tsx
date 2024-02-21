import React, { FC, memo, useCallback, useEffect } from "react";
import styles from "./UserInfo.module.css";
import { useAppDispatch, useAppSelector } from "store/reduxStore";
import { defaultAvatar } from "images/images";
import { Preloader } from "../../../shared/Preloader/Preloader";
import { getUserProfileTC, updateUserStatusTC } from "store/reducers/profileReducer/profileReducer";
import { ProfileStatus } from "../ProfileStatus/ProfileStatus";
import { selectUserProfile, selectUserStatus } from "store/reducers/profileReducer/profileSelectors";
import { selectIsFetching } from "store/reducers/appReducer/appSelectors";

type UserInfoProps = {
    userId: number;
};
export const UserInfo: FC<UserInfoProps> = memo(({ userId }) => {
    const user = useAppSelector(selectUserProfile);
    const isFetching = useAppSelector(selectIsFetching);
    const userStatus = useAppSelector(selectUserStatus);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getUserProfileTC(userId));
    }, [dispatch, userId]);

    const setNewStatus = useCallback((status: string) => {
        dispatch(updateUserStatusTC(status));
    }, [dispatch])

    if (!user) {
        return (
            <div className={styles.info}>
                <Preloader />
            </div>
        );
    } else {
        return (
            <div className={styles.info}>
                <img
                    className={styles.image}
                    alt="user_image"
                    src={user.photos.large || user.photos.small || defaultAvatar}
                />
                <div className={styles.description}>
                    <h2 className={styles.name}>{user.fullName}</h2>
                    <ProfileStatus
                        oldTitle={userStatus}
                        setNewTitle={setNewStatus}
                        disabled={isFetching}
                        placeholder={"Write your status..."}
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
});
