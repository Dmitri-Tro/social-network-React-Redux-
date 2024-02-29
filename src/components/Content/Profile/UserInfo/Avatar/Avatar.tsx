import React, { ChangeEvent, FC, memo, useCallback } from "react";
import styles from "components/Content/Profile/UserInfo/UserInfo.module.css";
import { defaultAvatar } from "images/images";
import { AddFileInput } from "components/shared/AddFileInput/AddFileInput";
import { useAppDispatch } from "store/reduxStore";
import { setUserPhotoTC } from "store/reducers/profileReducer/profileReducer";

type AvatarProps = {
    photo: string | null;
    showFileInput: boolean;
};
export const Avatar: FC<AvatarProps> = memo(({ photo, showFileInput }) => {
    const dispatch = useAppDispatch();

    const sendUserPhoto = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) dispatch(setUserPhotoTC(e.target.files[0])); // set user photo and show
    }, [dispatch]);
    return (
        <>
            <img className={styles.image} alt="user_image" src={photo || defaultAvatar} />
            {showFileInput && (
                <AddFileInput
                    title="Update your avatar"
                    type="file"
                    name="userPhoto"
                    accept=".jpg, .jpeg, .png"
                    style={styles.avatarInput}
                    onChange={sendUserPhoto}
                />
            )}
        </>
    );
});
