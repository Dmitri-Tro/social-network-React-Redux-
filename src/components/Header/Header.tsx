import React, {FC, memo, useCallback, useEffect} from 'react';
import styles from './Header.module.css';
import {Button} from "../shared/Button/Button";
import {useDispatch} from "react-redux";
import {setIsFetchingAC} from "../../store/reducers/usersReducer/usersReducer";
import {setAuthDataAC} from "../../store/reducers/authReducer/authReducer";
import {authApi} from "../../api/auth-api/authApi";

type HeaderProps = {
    onLogoutBtnClick: () => void
}

export const Header: FC<HeaderProps> = memo(({onLogoutBtnClick}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setIsFetchingAC(true));
        authApi.getAuth()
            .then(res => {
                dispatch(setIsFetchingAC(false));
                if (res.data.resultCode === 0) {
                    dispatch(setAuthDataAC(res.data.data))
                }
            })
    }, [dispatch]);

    const onLogoutBtnClickHandler = useCallback(() => {
        onLogoutBtnClick();
    }, [onLogoutBtnClick]);
    return (
        <header className={styles.container}>
            <img className={styles.img} alt='logo'
                 src='https://uploads.turbologo.com/uploads/design/hq_preview_image/1503315/draw_svg20210630-4871-1vsl6q8.svg.png'/>
            <h1 className={styles.welcome}>Welcome to your new social network!!!</h1>
            <Button title={'Logout'} callback={onLogoutBtnClickHandler} type={'secondary'} style={styles.btn} />
        </header>
    )
});