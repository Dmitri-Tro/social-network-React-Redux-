import React, { FC, memo, useCallback, useEffect } from "react";
import styles from "./UserInfo.module.css";
import { useAppDispatch, useAppSelector } from "store/reduxStore";
import { defaultAvatar } from "images/images";
import { getUserProfileTC, updateUserStatusTC } from "store/reducers/profileReducer/profileReducer";
import { ProfileStatus } from "../ProfileStatus/ProfileStatus";
import { selectUserProfile, selectUserStatus } from "store/reducers/profileReducer/profileSelectors";
import { selectIsFetching } from "store/reducers/appReducer/appSelectors";
import { selectUserId } from "store/reducers/authReducer/authSelectors";

type UserInfoProps = {
    userId: number | null;
};
export const UserInfo: FC<UserInfoProps> = memo(({ userId }) => {
    const user = useAppSelector(selectUserProfile);
    const isFetching = useAppSelector(selectIsFetching);
    const userStatus = useAppSelector(selectUserStatus);
    const authUserId = useAppSelector(selectUserId)
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (userId) {
            dispatch(getUserProfileTC(userId));
        }
    }, [dispatch, userId]);

    const setNewStatus = useCallback((status: string) => {
        if (user?.userId === authUserId) {
            dispatch(updateUserStatusTC(status));
        } else {

        }
    }, [dispatch, authUserId, user?.userId])

    if (!user) {
        return (
            <></>
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
                        oldTitle={userStatus || undefined}
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
