import {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../../store/reduxStore";
import {UserAuthData, UserMessage} from "../../../../../../interfaces/types";
import {
    deleteMessageAC,
    updateMessageTitleAC
} from "../../../../../../store/reducers/userMessagesReducer/userMessagesReducer";

export const useUserMessage = (message: UserMessage) => {
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
    return {user, messageTitle, messageViewMode, setMessageTitle, setMessageViewMode, updateMessageTitle, deleteMessage}
}