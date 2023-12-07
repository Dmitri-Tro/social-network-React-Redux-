import React from 'react';
import styles from './NewMessage.module.css';


export const NewMessage = () => {

    // @ts-ignore
    return (
        <div className={styles.container}>
            {/*<textarea className={styles.textarea}  wrap='hard'*/}
            {/*          placeholder='Write new message' />*/}
            {/*<div className={styles.buttons}>*/}
            {/*    <button className={`${styles.button_send} ${styles.button}`}>Sent</button>*/}
            {/*    <button className={`${styles.button_cancel} ${styles.button}`}>Cancel</button>*/}
            {/*</div>*/}
        </div>
    );
};