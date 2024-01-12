import React, {FC, memo} from 'react';
import styles from './Dialogs.module.css';
import {Messages} from "./Messages/Messages";
import {Contacts} from "./Contacts/Contacts";

type DialogsProps = {  }

export const Dialogs: FC<DialogsProps> = memo(() => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>DIALOGS</h2>
            <div className={styles.main}>
                <Contacts />
                <Messages />
            </div>
        </div>
    )
});