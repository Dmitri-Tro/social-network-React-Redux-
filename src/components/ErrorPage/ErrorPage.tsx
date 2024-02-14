import React, {FC, useCallback} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import styles from './errorPage.module.css';
import {Button} from "../shared/Button/Button";
import {useAppSelector} from "../../store/reduxStore";

const ErrorPage: FC = () => {

    const navigate = useNavigate();
    const isLogin = useAppSelector(state => state.userAuthData.isLogin)

    const handleNavigateToHome = useCallback(() => {
        navigate('/');
    }, [navigate]);

    if (!isLogin) {
        return <Navigate to={'/login'} />
    }

    return (
        <div className={styles.errorPage} id="error-page">
            <h1 className={styles.title}>Oops!</h1>
            <p className={styles.error}>Sorry, an unexpected error has occurred.</p>
            <Button title={'Go Home'} callback={handleNavigateToHome} type={"main"} />
        </div>
    )
};

export default ErrorPage;
