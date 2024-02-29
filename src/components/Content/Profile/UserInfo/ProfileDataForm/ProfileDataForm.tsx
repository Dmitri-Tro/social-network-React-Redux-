import React, { FC, memo } from "react";
import { ApiUser, UserProfileData } from "interfaces/types";
import { useAppDispatch } from "store/reduxStore";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateUserProfileTC } from "store/reducers/profileReducer/profileReducer";
import styles from "components/Content/Profile/UserInfo/UserInfo.module.css";
import { Button } from "components/shared/Button/Button";

type ProfileDataFormProps = {
    user: ApiUser;
};
export const ProfileDataForm: FC<ProfileDataFormProps> = memo(({ user }) => {
    const dispatch = useAppDispatch();

    const schema = yup.object({ // form validation with yup library
        fullName: yup.string().required().default(user.fullName),
        aboutMe: yup.string().required().default(user.aboutMe),
        lookingForAJob: yup.boolean().required().default(user.lookingForAJob),
        lookingForAJobDescription: yup.string().required().default(user.lookingForAJobDescription),
        contacts: yup.object().shape({
            github: yup.string().nullable().default(user.contacts.github),
            vk: yup.string().nullable().default(user.contacts.vk),
            facebook: yup.string().nullable().default(user.contacts.facebook),
            instagram: yup.string().nullable().default(user.contacts.instagram),
            twitter: yup.string().nullable().default(user.contacts.twitter),
            website: yup.string().nullable().default(user.contacts.website),
            youtube: yup.string().nullable().default(user.contacts.youtube),
            mainLink: yup.string().nullable().default(user.contacts.mainLink),
        }),
    });

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<UserProfileData>({
        resolver: yupResolver<UserProfileData>(schema),
    });
    const onSubmit: SubmitHandler<UserProfileData> = (data) => {
        dispatch(updateUserProfileTC(data)); // on submit form send updated data to server, set to state and show
    };
    return (
        <form>
            <div className={styles.infoBlock}>
                <span className={styles.item}>Full name</span>
                <input className={styles.itemInput} {...register("fullName")} defaultValue={user.fullName || ""} />
                <p className={styles.inputErrors}>{errors.fullName?.message}</p>
            </div>
            <div className={styles.infoBlock}>
                <span className={styles.item}>About me:</span>
                <input className={styles.itemInput} {...register("aboutMe")} defaultValue={user.aboutMe || ""} />
                <p className={styles.inputErrors}>{errors.aboutMe?.message}</p>
            </div>
            <div className={styles.infoBlock}>
                <span className={styles.item}>Looking for a job:</span>
                <input
                    type={"checkbox"}
                    id={"check"}
                    className={styles.itemInput}
                    {...register("lookingForAJob")}
                    defaultChecked={user.lookingForAJob}
                />
            </div>
            <div className={styles.infoBlock}>
                <span className={styles.item}>Professional skills:</span>
                <input
                    className={styles.itemInput}
                    {...register("lookingForAJobDescription")}
                    defaultValue={user.lookingForAJobDescription || ""}
                />
                <p className={styles.inputErrors}>{errors.lookingForAJobDescription?.message}</p>
            </div>
            <div className={styles.contacts}>
                <span className={styles.item}>Contacts:</span>
                {Object.keys(user.contacts).map((key, i) => {
                    return (
                        <div key={i} className={styles.infoBlock + " " + styles.contact}>
                            <span className={styles.item}>{key}: </span>
                            <input
                                className={styles.itemInput}
                                {...register(`contacts.${[key]}`)}
                                defaultValue={user.contacts[key] || ""}
                            />
                            <p className={styles.inputErrors}>{errors.fullName?.message}</p>
                        </div>
                    );
                })}
            </div>
            <Button title={"Update profile"} callback={handleSubmit(onSubmit)} type={"main"} />
        </form>
    );
});
