import React, { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./errorPage.module.css";
import { Button } from "../shared/Button/Button";
const ErrorPage: FC = () => {
    const navigate = useNavigate();

    const handleNavigateToHome = useCallback(() => {
        navigate("/");
    }, [navigate]);

    return (
        <div className={styles.errorPage}>
            <h1 className={styles.title}>Oops!</h1>
            <p className={styles.error}>Sorry, an unexpected error has occurred.</p>
            <Button title={"Go Home"} callback={handleNavigateToHome} type={"main"} />
        </div>
    );
};

export default ErrorPage;