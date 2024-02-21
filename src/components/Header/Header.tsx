import React, { FC, useCallback } from "react";
import styles from "./Header.module.css";
import { Button } from "../shared/Button/Button";
import { RootState, useAppDispatch } from "store/reduxStore";
import { useSelector } from "react-redux";
import { UserAuthData } from "interfaces/types";
import { logoutTC } from "store/reducers/authReducer/authReducer";

export const Header: FC = () => {
    const dispatch = useAppDispatch();
    const authData = useSelector<RootState, UserAuthData>((state) => state.userAuthData);

    const onLogoutBtnClickHandler = useCallback(() => {
        dispatch(logoutTC());
    }, [dispatch]);

    return (
        <header className={styles.container}>
            <img
                className={styles.img}
                alt="logo"
                src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1503315/draw_svg20210630-4871-1vsl6q8.svg.png"
            />
            <h1 className={styles.welcome}>Welcome to your new social network!!!</h1>
            {authData.isLogin && (
                <Button title={"Logout"} callback={onLogoutBtnClickHandler} type={"secondary"} style={styles.btn} />
            )}
        </header>
    );
};
