import React, {FC} from 'react';
import styles from './Dialogs.module.css';
import {Messages} from "./Messages/Messages";
import {Contacts} from "./Contacts/Contacts";


export const Dialogs: FC = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>DIALOGS</h2>
            <div className={styles.main}>
                <Contacts />
                <Messages />
            </div>
        </div>
    )
};