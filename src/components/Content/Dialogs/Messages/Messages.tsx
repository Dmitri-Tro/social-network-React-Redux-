import React, { FC } from "react";
import styles from "./Messages.module.css";
import { NewMessage } from "./NewMessage/NewMessage";
import { Message } from "./Message/Message";
import { FriendsMessage } from "./FriendMessage/FriendMessage";
import { useAppSelector } from "store/reduxStore";
import { selectUserMessages } from "store/reducers/userMessagesReducer/userMessagesSelectors";
import { selectFriendsMessages } from "store/reducers/friendsMessagesReducer/friendsMessagesSelectors";

export const Messages: FC = () => {
    const userMessageData = useAppSelector(selectUserMessages);
    const friendsMessagesData = useAppSelector(selectFriendsMessages);

    return (
        <div className={styles.container}>
            <NewMessage />
            {userMessageData.map((message) => (
                <Message key={message.messageId} message={message} />
            ))}
            {friendsMessagesData.map((message) => (
                <FriendsMessage key={message.messageId} message={message} />
            ))}
        </div>
    );
};
