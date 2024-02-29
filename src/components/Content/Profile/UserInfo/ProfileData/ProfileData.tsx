import React, { FC, memo, useCallback } from "react";
import styles from "components/Content/Profile/UserInfo/UserInfo.module.css";
import { ApiUser } from "interfaces/types";
import { UserContacts } from "components/Content/Profile/UserInfo/Contacts/UserContacts";
import { Button } from "components/shared/Button/Button";
import { setEditModeAC } from "store/reducers/appReducer/appReducer";
import { useAppDispatch } from "store/reduxStore";

type ProfileDataProps = {
    user: ApiUser;
};
export const ProfileData: FC<ProfileDataProps> = memo(({ user }) => {
    const dispatch = useAppDispatch();
    const setEditModeHandler = useCallback(() => dispatch(setEditModeAC(true)), [dispatch]); // switch view mode to edit mode and show ProfileDataForm

    return (
        <div>
            <div className={styles.infoBlock}>
                <span className={styles.item}>Full name:</span>
                <span className={styles.itemValue + " " + styles.name}>{user.fullName}</span>
            </div>
            <div className={styles.infoBlock}>
                <span className={styles.item}>About me:</span>
                <span className={styles.itemValue}>{user.aboutMe || ""}</span>
            </div>

            <div className={styles.infoBlock}>
                <span className={`${styles.default} ${styles.item}`}>Looking for a job:</span>
                <span style={user.lookingForAJob ? { color: "red" } : { color: "limegreen" }}>
                    {user.lookingForAJob ? "Yes!" : "No"}
                </span>
            </div>
            <div className={styles.infoBlock}>
                <span className={styles.item}>Professional skills:</span>
                <span className={styles.itemValue}>{user.lookingForAJobDescription}</span>
            </div>
            <div className={styles.contacts}>
                <span className={styles.item}>Contacts:&nbsp;</span>
                {Object.keys(user.contacts).map((key, i) => {
                    return <UserContacts key={i} title={key} value={user.contacts[key] as string} />;
                })}
            </div>
            <Button
                title={"Update profile"}
                callback={setEditModeHandler}
                type={"main"}
                style={styles.profileDataBtn}
            />
        </div>
    );
});
