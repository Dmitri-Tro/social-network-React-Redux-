import React, { FC } from "react";
import styles from "./LoginPage.module.css";
import { useAppSelector } from "store/reduxStore";
import { Preloader } from "../../shared/Preloader/Preloader";
import { Navigate } from "react-router-dom";
import { LoginForm } from "components/Content/LoginPage/LoginForm/LoginForm";
import { selectIsLogin } from "store/reducers/authReducer/authSelectors";
import { selectIsFetching } from "store/reducers/appReducer/appSelectors";

export const LoginPage: FC = () => {
    const isLogin = useAppSelector(selectIsLogin);
    const isFetching = useAppSelector(selectIsFetching);

    if (isLogin) {
        return <Navigate to={"/profile"} />;
    }

    if (isFetching) {
        return <Preloader style={styles.preloader} />;
    } else {
        return (
            <div className={styles.container}>
                <h3>Test account:</h3>
                <span>Email: free@samuraijs.com</span>
                <span style={{marginBottom: '50px'}}> Password: free</span>
                <LoginForm />
            </div>
        );
    }
};
