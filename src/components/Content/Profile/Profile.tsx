import React, { FC, useEffect } from "react";
import styles from "./Profile.module.css";
import { UserInfo } from "./UserInfo/UserInfo";
import { Posts } from "./UserPosts/Posts";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/reduxStore";
import { selectUserId } from "store/reducers/authReducer/authSelectors";
import { getUserProfileTC } from "store/reducers/profileReducer/profileReducer";

export const Profile: FC = () => {
    const { userId } = useParams();
    const myId = useAppSelector(selectUserId);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    let profileId: number | null = null;
    // define which profile to show
    if (userId) { // if the address bar include userID - show this user profile
        profileId = Number(userId);
    } else if (myId) { // else if user authorized - show authorized user profile
        profileId = myId;
    } else { // else - if user not authorized - redirect to login page
        navigate("/login");
    }
    useEffect(() => {
        if (profileId) {
            dispatch(getUserProfileTC(profileId)); // get user profile from server, set to state and show
        }
    }, [dispatch, profileId]);

    return (
        <div className={styles.container}>
            <div className={styles.image} />
            <div className={styles.user}>
                <UserInfo userId={profileId} />
                <Posts />
            </div>
        </div>
    );
};
