import React, {FC} from 'react';
import styles from './Dialogs.module.css';
import {Messages} from "./Messages/Messages";
import {Contacts} from "./Contacts/Contacts";
import {
    MessageItemType,
    MessagesDataType,
    UserFriend,
    UserItemType,
} from "../../../interfaces/types";
import {v1} from "uuid";


type DialogsPropsType = {
    verifiedUser: UserItemType
    userFriendsList: Array<UserFriend>
    messagesData: MessagesDataType
    addNewMessage: (title: string) => void
}

export const Dialogs: FC<DialogsPropsType> = ({verifiedUser, userFriendsList, messagesData, addNewMessage}) => {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>DIALOGS</h2>
            <div className={styles.main}>
                <Contacts userFriendsList={userFriendsList}/>
                <Messages verifiedUser={verifiedUser} userFriendsList={userFriendsList} messagesData={messagesData} addNewMessage={addNewMessage}/>
            </div>
        </div>
    );
};