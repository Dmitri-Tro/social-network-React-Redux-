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
    setMessagesData: (newMessage: MessageItemType) => void
}

export const Dialogs: FC<DialogsPropsType> = ({verifiedUser, userFriendsList, messagesData, setMessagesData}) => {
    const createNewMessage = (messageTitle: string) => {
        const newMessage = {
            messageId: v1(),
            message: messageTitle,
            sendFromUserId: verifiedUser.userId,
            sendToUserId: userFriendsList[0].friendId,
        }
        setMessagesData(newMessage);
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>DIALOGS</h2>
            <div className={styles.main}>
                <Contacts userFriendsList={userFriendsList}/>
                <Messages verifiedUser={verifiedUser} userFriendsList={userFriendsList} messagesData={messagesData} createNewMessage={createNewMessage}/>
            </div>
        </div>
    );
};