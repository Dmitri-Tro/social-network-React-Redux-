import React, {FC} from 'react';
import styles from './Messages.module.css';
import {NewMessage} from "./NewMessage/NewMessage";
import {MessageItemType, MessagesDataType} from "../../../../interfaces/types";
import {Message} from "./Message/Message";


type MessagesPropsType = {
    messagesData: MessagesDataType
    setMessagesData: (newMessage: MessageItemType) => void
}

export const Messages: FC<MessagesPropsType> = ({messagesData, setMessagesData}) => {

    return (
        <div className={styles.container}>
            <NewMessage setMessagesData={setMessagesData} />
            {messagesData.map(message => <Message key={message.messageId} messageData={message}/>)}
        </div>
    );
};
