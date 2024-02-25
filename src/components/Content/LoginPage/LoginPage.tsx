import React, { FC } from "react";
import styles from "./LoginPage.module.css";
import { useAppSelector } from "store/reduxStore";
import { Navigate } from "react-router-dom";
import { LoginForm } from "components/Content/LoginPage/LoginForm/LoginForm";
import { selectIsLogin } from "store/reducers/authReducer/authSelectors";

const LoginPage: FC = () => {
    const isLogin = useAppSelector(selectIsLogin);

    if (isLogin) {
        return <Navigate to={"/profile"} />;
    }

    return (
        <div className={styles.container}>
            <h3>Test account:</h3>
            <span>Email: free@samuraijs.com</span>
            <span style={{ marginBottom: "50px" }}> Password: free</span>
            <LoginForm />
        </div>
    );
};


export default LoginPage;