import { useCallback } from "react";
import { deleteFriendMessageTC } from "store/reducers/friendsMessagesReducer/friendsMessagesReducer";
import { FriendMessage } from "interfaces/types";
import { useAppDispatch } from "store/reduxStore";

export const useFriendMessage = (message: FriendMessage) => {
    const dispatch = useAppDispatch();
    const deleteFriendMessage = useCallback(() => {
        dispatch(deleteFriendMessageTC(message.messageId));
    }, [dispatch, message.messageId]);

    return { deleteFriendMessage };
};
