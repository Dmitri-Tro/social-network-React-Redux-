import React, { FC } from "react";
import styles from "./Profile.module.css";
import { UserInfo } from "./UserInfo/UserInfo";
import { Posts } from "./UserPosts/Posts";
import { Navigate, useParams } from "react-router-dom";
import { useAppSelector } from "store/reduxStore";
import { selectIsLogin } from "store/reducers/authReducer/authSelectors";

export const Profile: FC = () => {
    const { userId } = useParams();
    const isLogin = useAppSelector(selectIsLogin);

    if (!isLogin) {
        return <Navigate to={"/login"} />;
    }

    return (
        <div className={styles.container}>
            <div className={styles.image} />
            <div className={styles.user}>
                <UserInfo userId={userId ? Number(userId) : 30592} />
                <Posts />
            </div>
        </div>
    );
};
