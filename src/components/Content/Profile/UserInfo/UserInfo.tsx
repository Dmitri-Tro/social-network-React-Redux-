import React, { FC, memo, useCallback } from "react";
import styles from "./UserInfo.module.css";
import { useAppDispatch, useAppSelector } from "store/reduxStore";
import { updateUserStatusTC } from "store/reducers/profileReducer/profileReducer";
import { EditableTitle } from "components/Content/Profile/ProfileStatus/EditableTitle";
import { selectUserProfile, selectUserStatus } from "store/reducers/profileReducer/profileSelectors";
import { selectEditMode, selectIsFetching } from "store/reducers/appReducer/appSelectors";
import { selectUserId } from "store/reducers/authReducer/authSelectors";
import { Avatar } from "components/Content/Profile/UserInfo/Avatar/Avatar";
import { ProfileData } from "components/Content/Profile/UserInfo/ProfileData/ProfileData";
import { ProfileDataForm } from "components/Content/Profile/UserInfo/ProfileDataForm/ProfileDataForm";

type UserInfoProps = {
    userId: number | null;
};
export const UserInfo: FC<UserInfoProps> = memo(({ userId }) => {
    const user = useAppSelector(selectUserProfile);
    const isFetching = useAppSelector(selectIsFetching);
    const userStatus = useAppSelector(selectUserStatus);
    const authUserId = useAppSelector(selectUserId);
    const editMode = useAppSelector(selectEditMode);
    const dispatch = useAppDispatch();

    const setNewStatus = useCallback(
        (status: string) => {
            if (userId === authUserId) {
                dispatch(updateUserStatusTC(status));
            }
        },
        [dispatch, authUserId, userId],
    );

    if (!user) {
        return <></>;
    } else {
        return (
            <div className={styles.info}>
                <div className={styles.avatar}>
                    <Avatar photo={user.photos.large} showFileInput={userId === authUserId} />
                </div>
                <div className={styles.description}>
                    <EditableTitle
                        oldTitle={userStatus || undefined}
                        setNewTitle={setNewStatus}
                        disabled={isFetching}
                        placeholder={"Write your status..."}
                        stylesClass={styles.profileStatus}
                    />
                    {editMode ? <ProfileDataForm user={user} /> : <ProfileData user={user} />}
                </div>
            </div>
        );
    }
});
