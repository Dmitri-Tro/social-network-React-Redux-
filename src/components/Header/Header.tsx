import React, { FC, useCallback } from "react";
import styles from "./Header.module.css";
import { Button } from "../shared/Button/Button";
import { RootState, useAppDispatch, useAppSelector } from "store/reduxStore";
import { useSelector } from "react-redux";
import { UserAuthData } from "interfaces/types";
import { logoutTC } from "store/reducers/authReducer/authReducer";
import { selectIsFetching } from "store/reducers/appReducer/appSelectors";
import { Box, LinearProgress } from "@mui/material";

export const Header: FC = () => {
    const dispatch = useAppDispatch();
    const authData = useSelector<RootState, UserAuthData>((state) => state.userAuthData);
    const isFetching = useAppSelector(selectIsFetching);

    const onLogoutBtnClickHandler = useCallback(() => {
        dispatch(logoutTC()); // logout user and reset user authData
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <Box sx={{ width: "100%" }}>
                <header className={styles.header}>
                    <img
                        className={styles.img}
                        alt="logo"
                        src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1503315/draw_svg20210630-4871-1vsl6q8.svg.png"
                    />
                    <h1 className={styles.welcome}>Welcome to your new social network!!!</h1>
                    {authData.isLogin && ( // if user is login - show "logout" button
                        <Button
                            title={"Logout"}
                            callback={onLogoutBtnClickHandler}
                            type={"secondary"}
                            style={styles.btn}
                        />
                    )}
                </header>
                {isFetching && <LinearProgress />}
            </Box>
        </div>
    );
};
