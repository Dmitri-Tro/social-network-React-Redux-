import React, { FC } from "react";
import styles from "./LoginPage.module.css";
import { useAppSelector } from "store/reduxStore";
import { Preloader } from "../../shared/Preloader/Preloader";
import { Navigate } from "react-router-dom";
import { LoginForm } from "components/Content/LoginPage/LoginForm/LoginForm";
import { selectIsLogin, selectUserAuthData } from "store/reducers/authReducer/authSelectors";

export const LoginPage: FC = () => {
    const authData = useAppSelector(selectUserAuthData);
    const isLogin = useAppSelector(selectIsLogin);

    if (isLogin) {
        return <Navigate to={"/profile"} />;
    }

    if (authData.isFetching) {
        return <Preloader style={styles.preloader} />;
    } else {
        return (
            <div className={styles.container}>
                <LoginForm />
            </div>
        );
    }
};
