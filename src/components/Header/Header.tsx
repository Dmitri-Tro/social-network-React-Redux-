import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.container}>
            <img className={styles.img} alt='logo'
                 src='https://uploads.turbologo.com/uploads/design/hq_preview_image/1503315/draw_svg20210630-4871-1vsl6q8.svg.png'/>
            <h1 className={styles.welcome}>Welcome to your new social network!!!</h1>
        </header>
    );
};