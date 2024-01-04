import React, {FC} from 'react';
import styles from './Messages.module.css';
import {NewMessage} from "./NewMessage/NewMessage";
import {MessageItemType, MessagesDataType, UserFriend, UserItemType} from "../../../../interfaces/types";
import {Message} from "./Message/Message";
import {Friend} from "../../../Sidebar/Friends/Friend/Friend";
import {FriendMessage} from "./FriendMessage/FriendMessage";


type MessagesPropsType = {
    verifiedUser: UserItemType
    userFriendsList: Array<UserFriend>
    messagesData: MessagesDataType
    addNewMessage: (messageTitle: string) => void
}

export const Messages: FC<MessagesPropsType> = ({verifiedUser, userFriendsList, messagesData, addNewMessage}) => {

    return (
        <div className={styles.container}>
            <NewMessage addNewMessage={addNewMessage} />
            {
                messagesData.map(message => message.sendFromUserId === verifiedUser.userId
                ? <Message key={message.messageId} creator={verifiedUser} message={message}/>
                : <FriendMessage key={message.messageId} creator={userFriendsList[0]} message={message}/>)
            }
        </div>
    );
};
