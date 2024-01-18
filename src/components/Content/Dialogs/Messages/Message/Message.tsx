import React, {FC, memo, useCallback, useState} from 'react';
import styles from './Message.module.css';
import {UserAuthData, UserMessage} from "../../../../../interfaces/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../store/reduxStore";
import {Textarea} from "../../../../shared/Textarea/Textarea";
import {
    deleteMessageAC,
    updateMessageTitleAC
} from "../../../../../store/reducers/userMessagesReducer/userMessagesReducer";
import {Button} from "../../../../shared/Button/Button";

type MessageProps = {
    message: UserMessage
}

export const Message: FC<MessageProps> = memo(({message}) => {
    const [messageViewMode, setMessageViewMode] = useState<'readonly' | 'updating'>('readonly');
    const [messageTitle, setMessageTitle] = useState(message.message);
    const dispatch = useDispatch();
    const user = useSelector<RootState, UserAuthData>(state => state.userAuthData);

    const updateMessageTitle = useCallback(() => {
        dispatch(updateMessageTitleAC(message.messageId, messageTitle));
        setMessageViewMode('readonly')
    }, [dispatch, message.messageId, messageTitle]);
    const deleteMessage = useCallback(() => {
        dispatch(deleteMessageAC(message.messageId));
    }, [dispatch, message.messageId]);

    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <img className={styles.userAvatar} src={user.avatar} alt='user_avatar'/>
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