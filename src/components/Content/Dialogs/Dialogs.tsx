import React, {FC} from 'react';
import styles from './Dialogs.module.css';
import {Messages} from "./Messages/Messages";
import {Contacts} from "./Contacts/Contacts";
import {MessageItemType, MessagesDataType, UsersDataType} from "../../../interfaces/types";


type DialogsPropsType = {
    usersData: UsersDataType
    messagesData: MessagesDataType
    setMessagesData: (newMessage: MessageItemType) => void
}

export const Dialogs: FC<DialogsPropsType> = ({usersData, messagesData, setMessagesData}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>DIALOGS</h2>
            <div className={styles.main}>
                <Contacts usersData={usersData} />
                <Messages messagesData={messagesData} setMessagesData={setMessagesData}/>
            </div>
        </div>
    );
};