import React, {FC, memo} from 'react';
import styles from './Header.module.css';
import {Button} from "../shared/Button/Button";

type HeaderProps = {
    onLogoutBtnClick: () => void
}

export const Header: FC<HeaderProps> = memo(({onLogoutBtnClick}) => {
    const onLogoutBtnClickHandler = () => {
        onLogoutBtnClick();
    }
    return (
        <header className={styles.container}>
            <img className={styles.img} alt='logo'
                 src='https://uploads.turbologo.com/uploads/design/hq_preview_image/1503315/draw_svg20210630-4871-1vsl6q8.svg.png'/>
            <h1 className={styles.welcome}>Welcome to your new social network!!!</h1>
            <Button title={'Logout'} callback={onLogoutBtnClickHandler} type={'secondary'} style={styles.btn} />
        </header>
    )
});