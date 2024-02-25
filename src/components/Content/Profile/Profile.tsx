import React, { FC } from "react";
import styles from "./Profile.module.css";
import { UserInfo } from "./UserInfo/UserInfo";
import { Posts } from "./UserPosts/Posts";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "store/reduxStore";
import { selectIsLogin, selectUserId } from "store/reducers/authReducer/authSelectors";

export const Profile: FC = () => {
    const { userId } = useParams();
    const isLogin = useAppSelector(selectIsLogin);
    const myId = useAppSelector(selectUserId);
    const navigate = useNavigate();

    if (!isLogin) {
        return <Navigate to={"/login"} />;
    }

    let profileId: number | null = null;
    if (userId) {
        profileId = Number(userId);
    } else if (myId) {
        profileId = myId;
    } else {
        navigate('/login')
    }

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
