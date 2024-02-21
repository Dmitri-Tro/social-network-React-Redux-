import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/reduxStore";
import { UserMessage } from "interfaces/types";
import {
    deleteMessageTC,
    updateMessageTitleTC
} from "store/reducers/userMessagesReducer/userMessagesReducer";
import { selectUserProfile } from "store/reducers/profileReducer/profileSelectors";

export const useUserMessage = (message: UserMessage) => {
    const [messageViewMode, setMessageViewMode] = useState<"readonly" | "updating">("readonly");
    const [messageTitle, setMessageTitle] = useState(message.message);
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUserProfile);

    const updateMessageTitle = useCallback(() => {
        dispatch(updateMessageTitleTC(message.messageId, messageTitle));
        setMessageViewMode("readonly");
    }, [dispatch, message.messageId, messageTitle]);
    const deleteMessage = useCallback(() => {
        dispatch(deleteMessageTC(message.messageId));
    }, [dispatch, message.messageId]);
    return {
        user,
        messageTitle,
        messageViewMode,
        setMessageTitle,
        setMessageViewMode,
        updateMessageTitle,
        deleteMessage,
    };
};
