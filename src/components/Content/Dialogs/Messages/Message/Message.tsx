import React, {FC, memo} from 'react';
import styles from './Message.module.css';
import {UserMessage} from "../../../../../interfaces/types";
import {Textarea} from "../../../../shared/Textarea/Textarea";
import {Button} from "../../../../shared/Button/Button";
import {defaultAvatar} from "../../../../../images/images";
import {useUserMessage} from "./useUserMessage/useUserMessage";

type MessageProps = {
    message: UserMessage
}

export const Message: FC<MessageProps> = memo(({message}) => {

    const {
        user,
        messageTitle,
        messageViewMode,
        setMessageTitle,
        setMessageViewMode,
        updateMessageTitle,
        deleteMessage,
    } = useUserMessage(message);

    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <img className={styles.userAvatar} src={user.avatar || defaultAvatar} alt='user_avatar'/>
                <span className={styles.time}>{message.time}</span>
            </div>
            <div className={styles.messageContent}>
                {messageViewMode === 'readonly' &&
                    <p onDoubleClick={() => setMessageViewMode('updating')}
                       className={styles.message}>{message.message}</p>
                }
                {messageViewMode === 'updating' &&
                    <Textarea
                        value={messageTitle}
                        callback={e => setMessageTitle(e.currentTarget.value)}
                        onBlurCallback={updateMessageTitle}
                        autoFocus
                        style={styles.message}
                    />
                }
                <Button title={'x'}
                        callback={deleteMessage}
                        type={'secondary'}
                        style={styles.delBtn}
                />
            </div>
        </div>
    )
});