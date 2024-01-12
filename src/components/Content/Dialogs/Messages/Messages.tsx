import React, {FC} from 'react';
import styles from './Messages.module.css';
import {NewMessage} from "./NewMessage/NewMessage";
import {FriendsMessagesData, UserMessagesData} from "../../../../interfaces/types";
import {Message} from "./Message/Message";
import {FriendsMessage} from "./FriendMessage/FriendMessage";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reduxStore";

type MessagesProps = {  }

export const Messages: FC<MessagesProps> = () => {

    const userMessageData = useSelector<RootState, UserMessagesData>(state => state.userMessagesData);
    const friendsMessagesData = useSelector<RootState, FriendsMessagesData>(state => state.friendsMessagesData);

    return (
        <div className={styles.container}>
            <NewMessage />
            {userMessageData.map(message => <Message key={message.messageId} message={message}/>)}
            {friendsMessagesData.map(message => <FriendsMessage key={message.messageId} message={message}/>)}
        </div>
    );
};
