import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {deleteFriendMessageAC} from "../../../../../../store/reducers/friendsMessagesReducer/friendsMessagesReducer";
import {FriendMessage} from "../../../../../../interfaces/types";

export const useFriendMessage = (message: FriendMessage) => {
    const dispatch = useDispatch();
    const deleteFriendMessage = useCallback(() => {
        dispatch(deleteFriendMessageAC(message.messageId));
    }, [dispatch, message.messageId]);
    return {deleteFriendMessage}
}